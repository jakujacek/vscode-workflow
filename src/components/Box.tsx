type BoxProps = {
  text: string;
};

function Box(props: BoxProps) {
  return <div>{props.text}</div>;
}

export default Box;
