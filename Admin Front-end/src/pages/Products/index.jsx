//Styled-Components
import { Form, Input, ButtonContainer, CategoriesList, ProductsList, Product } from './styles';

//Components
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import Modal from '../../components/Modal';

//Hooks
import { useEffect, useState } from 'react';

//Service
import CategoryService from '../../services/CategoryService';
import ProductService from '../../services/ProductService';

export default function Products() {

  const [categories, setCategories] = useState([]);
  const [createCategory, setCreateCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [productBeingDeleted, setProductBeingDeleted] = useState(null);

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
  }, [categories]);

  function handleCreateCategory(event) {
    setCreateCategory(event.target.value);
  }

  async function handleSubmitInfo(formData) {
    const category = {
      name: formData.createCategory,
    };

    await CategoryService.createCategories(category);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    await handleSubmitInfo({
      createCategory
    });

    setIsLoading(false);
  }

  async function handleProductsByCategoryId(id) {
    try {
      setIsLoading(true);

      const productsList = await CategoryService.listProductsByCategoryId(id);

      setProducts(productsList);
    } catch {} finally {
      setIsLoading(false);
    }
  }

  function handleDeleteProduct(product) {
    setIsDeleteModalVisible(true);
    setProductBeingDeleted(product);
  }

  function handleCloseModal() {
    setIsDeleteModalVisible(false);
    setProductBeingDeleted(null);
  }

  async function handleConfirmDelete() {
    try {
      setIsLoading(true);

      await ProductService.deleteProduct(productBeingDeleted._id);

      setProducts((prevState) => prevState.filter(
        (product) => product.id !== productBeingDeleted._id
      ));

      setProducts([]);
      handleCloseModal();
    } catch {} finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Modal
        visible={isDeleteModalVisible}
        onCancel={handleCloseModal}
        onDelete={handleConfirmDelete}
        isLoading={isLoading}
      />

      {isLoading && (
        <Loader isLoading={isLoading} />
      )}

      <Form onSubmit={handleSubmit} noValidate>
        <small>Cadastrar nova categoria</small>
        <Input
          value={createCategory}
          placeholder='Camisas'
          onChange={handleCreateCategory}
        />

        <ButtonContainer>
          <Button
            type='submit'
          >
            Cadastrar Categoria
          </Button>
        </ButtonContainer>
      </Form>

      <CategoriesList>
        {categories.map((category) => (
          <Button
            type='button'
            key={category._id}
            onClick={() => handleProductsByCategoryId(category._id)}
          >
            {category.name}
          </Button>
        ))}
      </CategoriesList>

      <ProductsList>
        {products.map((product) => (
          <Product
            key={product._id}
          >
            <small>{product.name}</small>
            <button className='button-13' onClick={() => handleDeleteProduct(product)}>
              Remover Produto
            </button>
            <img src={`http://localhost:3001/uploads/${product.imagePath}`} alt="" />
            <small>{product.description}</small>
            <small>Cor: {product.color}</small>
            <div className="info">
              <small>Tamanho: {product.size[0].name}</small>
              <strong>Preço: {product.size[0].price}</strong>
            </div>
            <div className="info">
              <small>Tamanho: {product.size[1].name}</small>
              <strong>Preço: {product.size[1].price}</strong>
            </div>
            <div className="info">
              <small>Tamanho: {product.size[2].name}</small>
              <strong>Preço: {product.size[2].price}</strong>
            </div>
            <div className="info">
              <small>Tamanho: {product.size[3].name}</small>
              <strong>Preço: {product.size[3].price}</strong>
            </div>
            <small>Categoria: {product.category}</small>
          </Product>
        ))}
      </ProductsList>
    </>
  );
}
