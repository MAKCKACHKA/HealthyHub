// import icons from '../../assets/icons.svg';
// import clap from '../../assets/emoji/clap.png';
import { useDispatch } from 'react-redux';
import icons from '../../../assets/icons.svg';

import {
  ButtonWraperDown,
  ImageWrapper,
  ModalBody,
  RadioField,
  RadioLabel,
  ConfirmBtn,
  YourActivityInput,
  TargetName,
  Descriptione,
  CloseBtn,
  CancelBtn,
} from './ModalStyles';
import { Formik, Form } from 'formik';
import { updateUserGoal } from '../../../redux/operations';

export const GoalModal = ({
  setGoalModal,
  initialValues,
  run,
  maintain,
  muscle,
  setGoalValue,
}) => {
  const dispatch = useDispatch();

  const handleSave = (values) => {
    dispatch(updateUserGoal(values));
    setGoalValue(values.goal);
    setGoalModal(false);
  };

  return (
    <ModalBody>
      <CloseBtn
        onClick={() => {
          setGoalModal(false);
        }}
      >
        <use href={`${icons}#icon-close-circle`} />
      </CloseBtn>

      <h4>Target selection</h4>
      <Descriptione>
        The service will adjust your calorie intake to your goal
      </Descriptione>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSave}
      >
        {() => (
          <Form>
            <YourActivityInput>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal1"
                  name="goal"
                  value="lose fat"
                />
                <ImageWrapper>
                  <img src={run} alt="Running" />
                </ImageWrapper>
                <TargetName>Lose fat</TargetName>
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal2"
                  name="goal"
                  value="maintain"
                />
                <ImageWrapper>
                  <img src={maintain} alt="Running" />
                </ImageWrapper>
                <TargetName>Maintain</TargetName>
              </RadioLabel>
              <RadioLabel>
                <RadioField
                  type="radio"
                  id="goal3"
                  name="goal"
                  value="gain muscle"
                />
                <ImageWrapper>
                  <img src={muscle} alt="Running" />
                </ImageWrapper>
                <TargetName>Gain Muscle</TargetName>
              </RadioLabel>
            </YourActivityInput>
            <ButtonWraperDown>
              <ConfirmBtn type="submit">Confirm</ConfirmBtn>
              <CancelBtn type="submit">Cancel</CancelBtn>
            </ButtonWraperDown>
          </Form>
        )}
      </Formik>
    </ModalBody>
  );
};
