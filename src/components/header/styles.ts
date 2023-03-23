// styles
import { css } from '@emotion/react';
import  styled  from '@emotion/styled';
import { MediaQuerys } from '../../styles/global';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;

  height: 110px;
  padding: 15px;
  border-bottom: 1px solid var(--white);

  ${MediaQuerys.md}{
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  justify-content: space-between;

  ${MediaQuerys.md} {
    flex-direction: column;
    font-size: 13px;

    gap: 20px;
  }
`;

export const Divider = styled.div`
  border-left: 2px solid var(--white);
  margin-right: 10px;
  margin-left: 10px;
`;

export const ContainerAddress = styled.div`
  display: flex;
  margin-left: 0 auto;

  p{
    display: flex;
    font-weight: 700;

    color: var(--green);
    background: var(--black-600);
    padding: 8px;

    border-radius: 25px;
    justify-content: center;
    align-items: center;
  }
`;