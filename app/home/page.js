import Link from "next/link"

export default function Page() {
    return (
      <>
        <p>Welcome to Home!</p>
        <h2><Link href='/blog'>Blog</Link></h2>
        <h2><Link href='/settings'>Setting</Link></h2>
        <h2><Link href='/conference'>Conference</Link></h2>
      </>
    )
}
