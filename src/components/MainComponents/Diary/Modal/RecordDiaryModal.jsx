import React from 'react';
import {
  Backdrop,
  Modal,
  ModalTitle,
  WrapperFormTitle,
  Image,
  Title,
  FormFormic,
  Input,
  BtnCancel,
  WrapperInput,
  ContentWrapper,
  ProductList,
  Product,
  BtnAddNewProduct,
  ContainerForBtns,
  BtnRemoveProduct,
  BtnConfirm,
} from './RecordDiaryModal.styled';
import trashImage from '../../../../assets/trash.png';
import { useDispatch } from 'react-redux';
import { addFoodIntake } from '../../../../redux/operations';
import { useFormik } from 'formik';
// import * as Yup from 'yup';

const RecordDiaryModal = ({ onClose, image, mealType }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      mealType: mealType,
      foods: [
        {
          name: '',
          nutrition: {
            carbohydrates: '',
            protein: '',
            fat: '',
          },
          calories: '',
        },
      ],
    },
    onSubmit: async (values) => {
      try {
        if (values.foods && values.foods.length > 0 && values.foods[0]) {
          const foodIntakeData = {
            mealType: mealType.toLowerCase(),
            foods: values.foods.map((food) => ({
              name: food.name ? food.name : 'string',
              nutrition: {
                carbohydrates: food.nutrition.carbohydrates
                  ? Number(food.nutrition.carbohydrates)
                  : 0,
                protein: food.nutrition.protein
                  ? Number(food.nutrition.protein)
                  : 0,
                fat: food.nutrition.fat ? Number(food.nutrition.fat) : 0,
              },
              calories: food.calories ? Number(food.calories) : 0,
            })),
          };

          console.log('Food intake data:', foodIntakeData);

          await dispatch(addFoodIntake(foodIntakeData));

          onClose();
        } else {
          console.error('Invalid products array structure');
        }
      } catch (error) {
        console.error('Submission error:', error);
        console.error(
          'Error details:',
          error.response ? error.response.data : 'No response data'
        );
      }
    },
  });

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...formik.values.products];
    updatedProducts.splice(index, 1);
    formik.setFieldValue('products', updatedProducts);
  };

  const handleAddProduct = () => {
    formik.setFieldValue('products', [
      ...formik.values.products,
      {
        mealType: mealType,
        foods: [
          {
            name: '',
            nutrition: {
              carbohydrates: '',
              protein: '',
              fat: '',
            },
            calories: '',
          },
        ],
      },
    ]);
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalTitle>Record your meal</ModalTitle>
        <WrapperFormTitle>
          <Image src={image} alt="Plate" />
          <Title>{mealType}</Title>
        </WrapperFormTitle>
        <FormFormic onSubmit={formik.handleSubmit}>
          <ContentWrapper>
            {formik.values.foods.map((food, index) => (
              <ProductList key={index}>
                <Product>
                  <WrapperInput>
                    <Input
                      type="text"
                      id={`name-${index}`}
                      name={`foods[${index}].name`}
                      placeholder="The name of the product or dish"
                      onChange={formik.handleChange}
                      value={food.name}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`carbonohidrates-${index}`}
                      name={`foods[${index}].nutrition.carbohydrates`}
                      placeholder="Carbonoh."
                      onChange={formik.handleChange}
                      value={food.nutrition.carbohydrates}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`protein-${index}`}
                      name={`foods[${index}].nutrition.protein`}
                      placeholder="Protein"
                      onChange={formik.handleChange}
                      value={food.nutrition.protein}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`fat-${index}`}
                      name={`foods[${index}].nutrition.fat`}
                      placeholder="Fat"
                      onChange={formik.handleChange}
                      value={food.nutrition.fat}
                    />
                  </WrapperInput>
                  <WrapperInput>
                    <Input
                      type="number"
                      id={`calories-${index}`}
                      name={`foods[${index}].calories`}
                      placeholder="Calories"
                      onChange={formik.handleChange}
                      value={food.calories}
                    />
                  </WrapperInput>
                  <BtnRemoveProduct
                    type="button"
                    onClick={() => handleRemoveProduct(index)}
                  >
                    <img src={trashImage} alt="Trash" />
                  </BtnRemoveProduct>
                </Product>
              </ProductList>
            ))}
            <BtnAddNewProduct type="button" onClick={handleAddProduct}>
              + Add more
            </BtnAddNewProduct>
          </ContentWrapper>
          <ContainerForBtns>
            <BtnCancel type="button" onClick={onClose}>
              Cancel
            </BtnCancel>
            <BtnConfirm type="submit">Confirm</BtnConfirm>
          </ContainerForBtns>
        </FormFormic>
      </Modal>
    </Backdrop>
  );
};

export default RecordDiaryModal;
