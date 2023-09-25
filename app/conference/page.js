import Link from "next/link"

export default function Page() {
    return (
      <>
        <p>Welcome to Conference!</p>
        <h2><Link href='/conference/sessions'>Sessions</Link></h2>
        <h2><Link href='/conference/speakers'>Speakers</Link></h2>
      </>
    )
}
