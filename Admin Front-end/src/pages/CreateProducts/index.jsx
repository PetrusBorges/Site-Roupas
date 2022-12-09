//Styled-Components
import { Form, Input, Select, BackGroundContainer, ButtonContainer } from './styles';

//Components
import Button from '../../components/Button';
import Loader from '../../components/Loader';

//Hooks
import { useEffect, useState } from 'react';

//Service
import CategoryService from '../../services/CategoryService';

//Imagens
import Foto from '../../assets/images/Foto.svg';

export default function CreateProducts() {

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState({});
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    async function loadCategories() {
      try {

        const categoriesList = await CategoryService.listCategories();

        setCategories(categoriesList);
      } catch {} finally {
        setIsLoading(false);
      }
    }

    loadCategories();
  }, []);

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      setIsLoading(true);

      let formData = new FormData();

      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('color', color);
      formData.append('size', size);
      formData.append('category', categoryId);

      await fetch('http://localhost:3001/products', {
        method: 'POST',
        body: formData,
      });
    } catch {} finally {
      setIsLoading(false);
      setName('');
      setDescription('');
      setImage({});
      setColor('');
      setSize('');
      setCategoryId('');
    }
  }

  function handleName(event) {
    setName(event.target.value);
  }

  function handleDescription(event) {
    setDescription(event.target.value);
  }

  function handleImage(event) {
    setImage(event.target.files[0]);
  }

  function handleColor(event) {
    setColor(event.target.value);
  }

  function handleSize(event) {
    setSize(event.target.value);
  }

  return (
    <>
      {isLoading && (
        <Loader isLoading={isLoading} />
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <small>Nome do produto</small>
        <Input
          value={name}
          onChange={handleName}
          placeholder='Regata Adidas Basketball All Word Masculina'
        />

        <small>Descrição do produto</small>
        <Input
          value={description}
          onChange={handleDescription}
          placeholder='Indicado para o dia a dia'
        />

        <small>Cor do produto</small>
        <Input
          value={color}
          onChange={handleColor}
          placeholder='Preto'
        />

        <small>Tamanho do produto</small>
        <Input
          value={size}
          onChange={handleSize}
          placeholder='[{"name": "P","price": 65.90},{"name": "M","price": 65.90},{"name": "G","price": 65.90},{"name": "GG","price": 65.90}]'
        />

        <small>Categoria do produto</small>
        <Select
          value={categoryId}
          onChange={(event) => setCategoryId(event.target.value)}
        >
          <option value="">Sem Categoria</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </Select>

        <small>Imagem do Produto</small>
        <label htmlFor="Archive">Enviar Imagem</label>
        <Input
          type='file'
          id='Archive'
          placeholder='Imagem do produto'
          onChange={handleImage}
        />

        <ButtonContainer>
          <Button
            type='submit'
          >
            Cadastrar Produto
          </Button>
        </ButtonContainer>
      </Form>

      <BackGroundContainer>
        <img src={Foto} alt="Foto" />
      </BackGroundContainer>
    </>
  );
}
