/** Component will render the featureName if isEnabled is true. */
export default function FeatureToggle({featureName, isEnabled}) {
    if(isEnabled) {
        return featureName
    }else {
        return "Feature [featureName] is disabled"
    }
}