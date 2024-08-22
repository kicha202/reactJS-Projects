import react from 'react';

export function Home(props) {
return(
    <>
<div>
{
props.items.map((val, index) =>(
<div key={index}>
<p>{val.title}</p>
<img src={val.image} height={'100px'}/>
</div>
))
}
</div>
</>
)
}
