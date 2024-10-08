import React from "react";

function Registrasi() {
    const [email, setEmail] = React.useState("");
    const [nama, setNama] = React.useState("");
    const [hp, setHp] = React.useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Kirim data ke server (logika server bisa ditambahkan di sini)

        alert(`
            Nama: ${nama}
            Email: ${email}
            Nomor HP: ${hp}
        `);
        console.log(`
            Nama: ${nama}
            Email: ${email}
            Nomor HP: ${hp}
        `);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nama:
                <input type="text" value={nama} onChange={(e) => setNama(e.target.value)}/>
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Hp:
                <input type="tel" value={hp} onChange={(e) => setHp(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Registrasi;