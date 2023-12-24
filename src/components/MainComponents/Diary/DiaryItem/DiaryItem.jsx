import { useState, useEffect } from 'react';
import {
  AddButton,
  Title,
  CardWrap,
  DiaryImage,
  TitleWrap,
  InfoWrap,
  CarbonohidratesWrap,
  ProteinWrap,
  FatWrap,
  Value,
  BtnRemoveProduct,
} from './DiaryItem.styled.jsx';

import trashImage from '../../../../assets/trash.png';

import RecordDiaryModal from '../Modal/RecordDiaryModal.jsx';

const DiaryItem = ({ title, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nutritionInfo, setNutritionInfo] = useState(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleDelete = () => {
    setNutritionInfo(null);
    localStorage.removeItem(`${title}_nutritionInfo`);
  };

  const handleRecord = (data) => {
    setNutritionInfo(data);
    localStorage.setItem(`${title}_nutritionInfo`, JSON.stringify(data));
    toggleModal();
  };

  useEffect(() => {
    const savedData = localStorage.getItem(`${title}_nutritionInfo`);
    if (savedData) {
      setNutritionInfo(JSON.parse(savedData));
    }
  }, [title]);

  return (
    <CardWrap>
      <TitleWrap>
        <DiaryImage src={image} alt="Plate" />
        <Title>{title}</Title>
      </TitleWrap>
      {!nutritionInfo && (
        <AddButton onClick={toggleModal}>+ Record your meal</AddButton>
      )}

      {isModalOpen && !nutritionInfo && (
        <RecordDiaryModal
          onClose={toggleModal}
          image={image}
          mealType={title}
          onRecord={handleRecord}
        />
      )}

      {nutritionInfo && (
        <InfoWrap>
          <CarbonohidratesWrap>
            Carbohydrates:
            <Value>{nutritionInfo.foods[0].nutrition.carbohydrates}</Value>
          </CarbonohidratesWrap>
          <ProteinWrap>
            Protein: <Value>{nutritionInfo.foods[0].nutrition.protein}</Value>
          </ProteinWrap>
          <FatWrap>
            Fat: <Value>{nutritionInfo.foods[0].nutrition.fat}</Value>
          </FatWrap>
          <BtnRemoveProduct onClick={handleDelete}>
            <img src={trashImage} alt="trash" />
          </BtnRemoveProduct>
        </InfoWrap>
      )}
    </CardWrap>
  );
};

export default DiaryItem;
