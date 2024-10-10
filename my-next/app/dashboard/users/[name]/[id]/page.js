export default function Page({params}) {
    return(
        <div>
            <h1>This is {params.name} Page</h1>
            <h2>Your id is : {params.id}</h2>
        </div>
    );
  }
  