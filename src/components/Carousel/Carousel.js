import { useEffect, useState } from "react"
import axios from "axios"
import './Carousel.css'

function Carousel() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setIndex(index => index < data.length - 1 ? index + 1 : 0)
        }, 2000)
    }, [])

    useEffect(() => {
        axios.get('http://localhost:5000/api/slider')
            .then(res => {
                console.log(res.data);
                if (Array.isArray(res.data.data)) {
                    setData(res.data.data);
                } else {
                    console.error('La respuesta no contiene un array iterable:', res.data.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <img src={data.length > 0 && data[index]} width="100%" height={400} />
            <div className="flex mlr-10 center">
                {
                 data.length > 0 &&
                 data.map((imgItem, imgIndex) => {
                    return (
                        <div style={ imgIndex === index ? {
                            margin: '10px',
                            background: '#eee',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50px',
                        } : {
                            margin: '10px',
                            background: 'black',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50px',
                        }
                    }></div>
                    )
                 })   
                }    
            </div>
        </div>
    );
}

export default Carousel;
