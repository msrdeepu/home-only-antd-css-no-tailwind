import { useTypewriter } from "react-simple-typewriter";
import { Typography } from "antd";
const { Title } = Typography;

const TypedEffect = () => {
  const [text] = useTypewriter({
    words: [
      "SPA Single Page",
      "Responsive",
      "Awesome",
      "Fluid",
      "Dynamic CMS",
      "PWD Progressive",
    ],
    loop: 0,
  });
  return (
    <div>
      <Title style={{ color: "black" }} level={1}>
        #{text}
      </Title>
    </div>
  );
};

export default TypedEffect;
