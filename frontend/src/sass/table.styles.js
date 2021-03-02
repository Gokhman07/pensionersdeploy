import styled from 'styled-components';

export const Table = styled.div`
  width: 90%;
  height: 130px;
  display: flex;
  margin: 0 auto;
  border: 1px solid #706f6f;
  margin-bottom: 80px;
`
export const Item = styled.div`
  height: 100%;
  width: 100%;
`
export const Cell = styled.div`
  width: 100%;
  border-left: 1px solid #E6E1E8;
  box-sizing: border-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  color: #565059;
  cursor: pointer;
  border-top: none;
  vertical-align: middle;
  white-space: normal;
  font-size: 18px;
  line-height: 15px;
  text-overflow: ellipsis;
  padding: 10px;
  height: 50%;
  border: 1px solid #E6E1E8;`

export const Header = styled.div`
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  position: relative;
  color: white;
  font-size: 17px;
  line-height: 14px;
  font-weight: 500;
  white-space: nowrap;
  border-bottom: none;
  padding: 10px 8px 8px 8px;
  text-align: left;
  background-color: ${props => props.color ? props.color : '#827789'};
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom: 1px solid rgba(37, 33, 40, 0.12);
  height: 50%;
  box-sizing: border-box;
  border-right: 1px solid rgba(37, 33, 40, 0.12);
  justify-content: flex-end !important;
  width: 100%; `
export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  text-align: right;
  font-size: 22px;
  color : ${props => props.error ? 'rgba(224, 60, 60, 1)' : 'rgba(64, 62, 62, 1)'}
`
export const Title = styled.h1`
  font-size: 40px;
  color : ${props => props.color ? props.color : '#0D4362'};
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
`
export const GTitle = styled(Title)`
  font-size: 35px;
  margin-bottom: 10px;
  margin-top: 10px;
`
export const Link = styled.span`
  font-size: 26px;
  color : #274EB1 !important;
  position: absolute;
  left: 5%;
  top: ${props => props.two ? '10%' : '5%'};
  text-decoration: underline;
  cursor: pointer                                                      ;
`