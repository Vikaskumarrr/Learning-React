import { memo, useState } from "react";


const A = memo(({ a }) => {
    console.log("A rendered");
    return (
        <div>
            <p>Inside A</p>
            <p>A = {a}</p>
        </div>
    )
})


const MemoExample = () => {
    console.log("Memo Example rendered");
    const [toggle, settoggle] = useState(true);
    return (
        <div>
            <A a={10} />
            {/* A is a memoized component , will get  triggerd only when props changes */}
            <h1>Memo example Component</h1>
            <button onClick={(() => settoggle(!toggle))}>Render memo Example component</button>
        </div>
    )
}

export default MemoExample; 