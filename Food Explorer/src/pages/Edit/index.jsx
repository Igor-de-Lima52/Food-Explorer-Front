import { FiChevronLeft, FiUpload, FiChevronDown } from "react-icons/fi";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

export function Edit(){
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Entrada");
  const [price, setPrice] = useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [data, setData] = useState(null);

  const [dishFileImage, setDishFileImage] = useState(null);

  const params = useParams();

  function handleChooseFile(e){
    const file = e.target.files[0];
    setDishFileImage(file);
  }

  function handleBack(){
    navigate(-1);
  }

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  function handleChangePrice(e){
    const price = e.target.value;
    const formattedPrice = parseFloat(price).toFixed(2).replace(".", ",");

    setPrice(formattedPrice);
  }

  async function handleDelete(){
    await api.delete(`/dishes/${params.id}`);
    alert("Prato apagado com sucesso!");
    navigate("/");
  }
  
  async function handleUpdate(){
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
    
    formData.append("title", title);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);
    if(dishFileImage){
      formData.append("image", dishFileImage);
    }

    ingredients.forEach((ingredient, index) => {
      formData.append(`ingredients[${index}]`, ingredient);
    });

    try{
      await api.put(`/dishes/${params.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Prato atualizado com sucesso!");
      handleBack();
    }catch(error){
      console.log("Erro ao atualizar o prato:", error);
      alert("Erro ao atualizar o prato");
    }
  } 

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setIngredients(response.data.ingredients.map(ingredient => ingredient.name));
      setTitle(response.data.title);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setDishFileImage(response.data.image);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)}/>
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      
      <header className="header">
        <a className="back" onClick={handleBack}><FiChevronLeft/>voltar</a>
      </header>

      {
        data &&
        <main>
        <Form>
          <h2>Editar prato</h2>
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
              <Input type="text" id="name" placeholder={data.title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="category">Categoria</label>
              <Select id="category" icon={FiChevronDown} category={data.category} onChange={e => setCategory(e.target.value)}/>
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
              <Input id="price" type="number" placeholder={`R$ ${data.price}`} onChange={handleChangePrice} />
            </div>
          </div>
          <div className="input-wrapper">
            <label htmlFor="description">Descrição</label>
            <Textarea id="description" placeholder={data.description} onChange={e => setDescription(e.target.value)} />
          </div>
          <div className="buttons">
            <Button className="delete" title="Excluir prato" onClick={handleDelete} />
            <Button className="save" title="Salvar alterações" onClick={handleUpdate} />
          </div>
        </Form>
      </main>
      }
      <Footer/>
    </Container>
  )
}