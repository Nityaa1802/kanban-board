import './index.css';
export default function Heading({ text }: { text: string }) {
  return <div id='heading'>{text}</div>;
}

export function SubHeading({ text }: { text: string }) {
  return <div id='sub-heading'>{text}</div>;
}