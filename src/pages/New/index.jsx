import { FiChevronLeft, FiUpload, FiChevronDown } from "react-icons/fi";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

import { Container, Form } from "./styles";
import { api } from "../../services/api";

export function New(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [dishFileImage, setDishFileImage] = useState(null);

  function handleChooseFile(e){
    const file = e.target.files[0];
    setDishFileImage(file);
  }

  function handleBack(){
    navigate(-1);
  }

  function handleChangePrice(e){
    const price = e.target.value;
    const formattedPrice = parseFloat(price).toFixed(2).replace(".", ",");

    setPrice(formattedPrice);
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewDish(){
    if(!dishFileImage){
      return alert("Coloque uma imagem do prato");
    }
    if(!title){
      return alert("Digite o nome do prato");
    }
    if(!category){
      return alert("Escolha a categoria do prato");
    }
    if(newIngredient){
      return alert("Você deixou um ingrediente para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.")
    }
    if(!price){
      return alert("Digite o preço do prato");
    }
    if(!description){
      return alert("Digite a descrição do prato");
    }
    const formData = new FormData();
    formData.append("image", dishFileImage);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
  
    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });
  
    try {
      await api.post("/dishes", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      alert("Prato criado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao criar prato:", error);
      alert("Erro ao criar prato.");
    }
  }
  
  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}/>
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      
      <header className="header">
        <a className="back" onClick={handleBack}><FiChevronLeft/>voltar</a>
      </header>
      <main>
        <Form>
          <h2>Novo prato</h2>
          <div className="info">
            <div className="input-wrapper">
              <label htmlFor="fileDiv">Imagem do prato</label>
              <div id="fileDiv">
                <label htmlFor="file"><FiUpload/>Selecione a imagem</label>
                <input type="file" id="file" className="file-input" onChange={handleChooseFile}/>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Nome</label>
              <Input type="text" placeholder="Ex: Salada Caesar" id="name" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="category">Categoria</label>
              <Select id="category" icon={FiChevronDown} onChange={e => setCategory(e.target.value)} category={category}/>
            </div>
          </div>
          <div className="info-2">
            <div className="input-wrapper">
              <label htmlFor="ingredients">Ingredientes</label>
              <div id="ingredients" className="ingredients">
              {
                ingredients.map((ingredient, index) => (<IngredientItem key={String(index)} value={ingredient} onClick={() => handleRemoveIngredient(ingredient)}/>))
              }
              <IngredientItem isNew placeholder="Adicionar" onChange={e => setNewIngredient(e.target.value)} value={newIngredient} onClick={handleAddIngredient}/>
              </div>
            </div>
            <div className="input-wrapper">
              <label htmlFor="price">Preço</label>
              <Input id="price" type="number" placeholder="R$ 00.00" onChange={e => handleChangePrice(e)} />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <Textarea id="description" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)} />
          </div>
          <Button className="save" title="Salvar alterações" onClick={handleNewDish}/>
        </Form>
      </main>
      <Footer/>
    </Container>
  )
}