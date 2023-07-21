import { MyButton } from "../../../component-library/src/components/MyButton";

export default function AppHomePage() {
  return (
    <MyButton onPress={() => alert("Button pressed!")}>Test from App</MyButton>
  );
}
