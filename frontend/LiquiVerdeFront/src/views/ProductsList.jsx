import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function ProductsList({ addToCart }) {
    const theme = useTheme();
  // Cambia el número de columnas según el tamaño de pantalla
    const isXs = useMediaQuery(theme.breakpoints.down('sm'));
    const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
    const isMd = useMediaQuery(theme.breakpoints.between('md', 'lg'));
    const cols = isXs ? 1 : isSm ? 2 : isMd ? 3 : 4;

    // Paginación

    //const itemsPerPage = 20;
    const [page, setPage] = useState(1);
    const pageCount = 20;

    const endpoint = `${import.meta.env.VITE_API_URL}external-data/?page=${page}`;
    const [results, setResults] = useState([]);
    const [message, setMessage] = useState(null);

    const handleChange = (event, value) => {
        setPage(value);
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    };

    // Hacer llamado a página
    useEffect (() => {
        const getElements = async () => {
            try {
                const response = await axios.get(endpoint);
                if (response.status === 200) {
                    setResults(response.data.products);
                    setMessage(null);
                } else {
                    setMessage({text: "Error en obtener resultados.", variant: "danger"});
                }
            } catch (error){
                setMessage({text:`${error.message}`, variant: "danger"});
            }
        };
        getElements();
    }, [endpoint]);

    return (
    <>
    <h1 style={{color: 'black', mt: '20px'}}>Catálogo de Productos</h1>
    <ImageList 
        sx={{ width: '100%', height: 'auto'}}
        cols={cols}
        rowHeight={180}>      
      {results.map((item) => (
        <ImageListItem key={item.image_small_url}>
          <img
            //srcSet={`${item.images}`}
            src={`${item.image_small_url}`}
            alt={item.product_name || item.brands}
            loading="lazy"
            style={{
                width: '100%',           // Asegura que ocupe todo el ancho del contenedor
                height: '100%',
                objectFit: 'contain', // Cambia cover por contain
                background: '#f5f5f5', // Fondo claro para imágenes pequeñas
                borderRadius: 8
            }}
          />
          <ImageListItemBar
            title={item.product_name} 
            subtitle={item.brands}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`Agregar a canasta`}
                onClick={addToCart}
              >
                <AddCircleIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Pagination
        count={pageCount}
        page={page}
        onChange={handleChange}
        sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
    />
    </>
  );
}
