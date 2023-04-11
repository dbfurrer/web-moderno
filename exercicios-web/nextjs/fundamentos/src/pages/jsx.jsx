import Layout from "@/components/Layout"

export default function Jsx() {
  const a = 3
  const b = 4
  return (
    <Layout titulo="Entendendo JSX">
      <div>
        <h1>JSX é um conceito central</h1>
        {a * b}
      </div>
    </Layout>
  )
}