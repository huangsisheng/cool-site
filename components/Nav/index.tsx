import "./index.css";

const Links = [
  { name: '首页', key: "home", href: "" },
  { name: '视觉', key: "view", href: "" },
  { name: '简体中文', key: "zh-cn", href: "" },
  { name: '主题', key: "theme", href: "" }
]

export default function Nav() {
  return (<nav className="nav-wrap flex justify-start items-center ">
    {
      Links.map((item) => <span className="nav-wrap-link mr-20 cursor-pointer" key={item.key}>{item.name}</span>)
    }
  </nav>)
}
