import Link from "next/link";

export default function Page() {
    return(
        <div>
            <h1>This is Dashboard Page</h1>
            &bull; <Link href = "dashboard/users/Felix/0001">Felix</Link><br/>
            &bull; <Link href = "dashboard/users/Hu">Hu</Link>
        </div>
    );
  }
  