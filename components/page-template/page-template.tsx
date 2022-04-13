import { Header, Footer } from "@/components"
import { PageProps } from "./types"

export default function PageTemplate({ ...props }: PageProps) {
  return (
    <>
      <Header/>
      <main>
        <div className="max-w-7xl max-auto"> {props.children}</div>
      </main>
      <Footer/>
    </>
  );
}