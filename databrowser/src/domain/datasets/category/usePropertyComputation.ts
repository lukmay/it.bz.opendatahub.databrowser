import { usePropertyMapping } from '../../api';
import { CellComponent } from '../../cellComponents/types';
import { PropertyConfig } from '../../datasetConfig/types';
import { PropertyConfigWithErrors } from './types';

type PropertyConfigWithValue = PropertyConfigWithErrors & {
  value: Record<string, unknown>;
  empty?: boolean;
};

export const usePropertyComputation = () => {
  const { mapWithIndex, mapListWithIndex } = usePropertyMapping();

  const computeProperties = (
    data: unknown,
    properties: PropertyConfig[],
    showAllProperties: boolean,
    editable: boolean
  ): PropertyConfigWithValue[] => {
    // Add data to properties such that it can be used in the render component
    const propertiesWithValue: PropertyConfigWithValue[] = properties.map(
      (property) => {
        // Use replacements (e.g. for language) to extract correct data from value
        const value =
          property.fields != null
            ? mapWithIndex(data, property.fields)
            : mapListWithIndex(data, property.listFields);

        return { ...property, value };
      }
    );

    // Show all properties in edit mode. The emptiness value
    // is set to false for all properties configs, to make sure that
    // the property is shown.
    if (editable) {
      return propertiesWithValue.map((property) =>
        propertyWithValueAndEmptiness(property, false)
      );
    }

    // If all properties should be shown, return all property configs.
    // Compute the emptiness value for each property config, such that
    // empty properties can be highlighted.
    if (showAllProperties) {
      return propertiesWithValue.map((property) =>
        propertyWithValueAndEmptiness(
          property,
          !hasNonEmptyValue(property.component, property.value)
        )
      );
    }

    // If only non-empty properties should be shown, filter empty properties
    // and set the emptiness value for each remaining property config to false.
    return propertiesWithValue
      .filter((property) =>
        hasNonEmptyValue(property.component, property.value)
      )
      .map((property) => propertyWithValueAndEmptiness(property, false));
  };

  return { computeProperties };
};

const propertyWithValueAndEmptiness = (
  p: PropertyConfigWithValue,
  empty: boolean
) => ({ ...propertyWithParams(p), empty });

const propertyWithParams = (property: PropertyConfigWithValue) => ({
  ...property,
  // Add params to value object, because they may be used in the render component
  value: { ...property.value, ...property.params },
});

const hasNonEmptyValue = (component: string, obj: Record<string, unknown>) => {
  // Special handling for some components
  if (hasSpecialHandling(component, obj)) {
    return false;
  }
  // Some components are always shown, even if they are empty
  if (isShowAlwaysComponent(component)) {
    return true;
  }
  // Default handling
  return Object.values(obj).find((v) => v != null) != null;
};

const hasSpecialHandling = (
  component: string,
  obj: Record<string, unknown>
) => {
  return (
    (component === CellComponent.StringCell ||
      component === CellComponent.UrlCell) &&
    obj.text === ''
  );
};

const isShowAlwaysComponent = (component: string) => {
  return (
    component === CellComponent.ToggleCell ||
    component === CellComponent.ArticleAdditionalInfoCell ||
    component === CellComponent.ArticleLinkInfoCell
  );
};
