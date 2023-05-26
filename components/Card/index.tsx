
interface IProps {
  className?: string;
  style?: Record<string, any>;
  children: React.ReactNode;
}

export default function Card(props: IProps) {
  const { className='', style, children } = props
  return <section className={`${className}radius-2`} style={style}>{children}</section>
}