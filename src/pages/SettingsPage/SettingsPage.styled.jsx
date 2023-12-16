// import { Formik, Field, Form } from 'formik';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const IconWrapper = styled.svg`
  width: 536px;
  height: 528px;
  fill: ${(props) => props.color || '#ffffff'};
  display: inline-block;
  margin-right: 5px;
`;

export const HeroSection = styled.section`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: 768px) {
    /* margin: 40px auto 80px; */
    gap: 80px;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    gap: 104px;
    justify-content: center;
  }
`;

export const HeroImg = styled.svg`
  width: 300px;
  height: 296px;
  display: block;
  height: 300px;
  display: block;
  margin: 0 auto 40px;
  @media screen and (min-width: 768px) {
    width: 380px;
    height: 376px;
    /* margin: 40px auto 80px; */
  }

  @media screen and (min-width: 1200px) {
    width: 592px;
    height: 588px;
    margin: 0;
  }
`;

export const HeroDescWrap = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 444px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 286px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0;
    text-align: left;
    padding: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.25;
  margin-bottom: 16px;
  text-align: center;
  word-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.2;
  }
  @media screen and (min-width: 1200px) {
    text-align: start;
  }
`;

export const SubTitleHero = styled.p`
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 24px;
  padding: 0;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;
