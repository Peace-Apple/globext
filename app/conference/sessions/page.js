import Link from "next/link"

export default function Page() {
    return (
      <>
        <p>Welcome to Session!</p>
        <h2><Link href='/conference'>Back to Conference</Link></h2>
      </>
    )
}
