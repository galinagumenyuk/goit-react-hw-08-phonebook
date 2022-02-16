import styled from "@emotion/styled";

export const ContactItem = styled.ul`
  padding-left: 0px;
`;

export const DeleteButton = styled.button`
    padding: 2px 4px;
    margin-left: 10px;
     border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    color: rgb(14, 124, 124);
  font-family: "Times New Roman";
  box-shadow: 1px 1px 2px #45B39D;
  cursor: pointer;
  background-color:  #ffffff;
  font-weight: 600;

  &:hover{
      background-color:  #A2D9CE ;
    
   }
    &:focus{
      background-color:  #A2D9CE ;
     
   }
`;

export const EditButton = styled.button`
    padding: 2px 4px;
    margin-left: 10px;
     border: none;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
    color: rgb(14, 124, 124);
  font-family: "Times New Roman";
  box-shadow: 1px 1px 2px #45B39D;
  cursor: pointer;
  background-color:  #ffffff;
  font-weight: 600;

  &:hover{
      background-color:  #A2D9CE ;
    
   }
    &:focus{
      background-color:  #A2D9CE ;
     
   }
`;

export const Contact = styled.li`

  list-style-type: none;
  font-family: "Times New Roman";
  margin-bottom: 6px;

  span + span {
    margin-left: 10px;
  }
  span{
    font-size: 22px;
  }
`;

