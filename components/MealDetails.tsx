import {
  View,
  StyleSheet,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export type MealDetailProps = {
  duration: number;
  affordability: 'affordable' | 'pricey' | 'luxurious';
  complexity: 'simple' | 'challenging' | 'hard';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}: MealDetailProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration} min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
