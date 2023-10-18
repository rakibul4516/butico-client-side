import { useEffect, useState } from "react";

const useDataFetch = (data) => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch(data)
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [data])
    return datas;
};

export default useDataFetch;