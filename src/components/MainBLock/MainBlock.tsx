import React,{useState} from "react";
import { Button, Form,Card } from "react-bootstrap";
import './MainBlock.css';
import { useHistory, Route } from "react-router-dom";
import { NavigationBar } from "../NavigationBar/NaviagtionBar";
import { PathAccess } from "../NavigationBarResult/PathAccess/PathAccess";

export const MainBlock = () => {
    const [corporateOrder , setCorporateOrder] = useState(false);
    const [isLicensed,setIsLicensed] = useState(false);
    const [email , setEmail] = useState('');
    const [ckeckEmail,setCkeckEmail ] = useState(false);
    const [city,setCity] = useState('');
    const [checkCity , setCheckCity] = useState(false);
    const [fullAddress , setFullAddress] = useState('');
    const [checkFullAdress , setCheckFullAdress] = useState(false);
    const [companyName,setCompanyName] = useState('');
    const [ckeckCompanyName,setCheckCompanyName]= useState(false);
    const [surname,setSurname] = useState('');
    const [checkSurname,setCheckSurname] = useState(false);
    const [name, setName] = useState('');
    const [checkName,setCheckName] = useState(false);
    const [index,setIndex] = useState('');
    const [checkIndex,setCheckIndex] = useState(false);
    const [country,setCountry] = useState('none');
    const [checkCountry , setCheckCountry] = useState(false);
    const [number,setNumber] = useState('');
    const [checkNumber , setCheckNumber] = useState(false);
    const [nameLicensee , setNameLicensee] = useState('');
    const [checkNameLicensee,setCheckNameLicensee] = useState(false);
    const [emailLicensee , setEmailLicensee] = useState('');
    const [checkEmailLicensee,setCheckEmailLicensee] = useState(false);
    const [paymentMethod,setPaymentMethod] = useState('none');
    const [checkPaymentMethod , setCheckPaymentMethod] = useState(false);
    const [cardNumber , setCardNumber] = useState('');
    const [checkCardNumber , setCheckCardNumber] = useState(false);
    const [safeCode,setSafecode] = useState('');
    const [checkSafeCode,setCheckSafeCode] = useState(false);
    const [cuponCode,setCuponCode] = useState(false);
    const [discountCode, setDiscountCode] = useState('');
    const [click,setClick] = useState(false);
    const [checkAll ,setCheckAll] = useState<any>(0);
    const arrOfMounth:number[] = [];
    const arrOfYears:number[] = [];
    const history = useHistory();
    for(let i = 1; i <= 12; i++) {
        arrOfMounth.push(i);
    }
    for (let j = 21; j <= 40; j++) {
      arrOfYears.push(j);
    }
  return (
  <>
   <Route path="/" exact>
     <NavigationBar/>
    <Form className="order">
      <div className="order__info">
        <h2>
          Платіжна Інформація
        </h2>
        <label className="order__corporate">
          <Form.Check
            checked={corporateOrder}
            onChange={() => setCorporateOrder((prev:boolean) => !prev)}
          />Корпоративна купівля
        </label>
          {corporateOrder &&
            <Form.Group>
              <Form.Control
                style={{position:"relative"}}
                value={companyName}
                onChange={({target}) => {
                  if(target.value.length > 0) {
                    setCheckCompanyName(true);
                  } else {
                    setCheckCompanyName(false);
                  }
                  setCompanyName(target.value)
                }} 
                placeholder="Назва компанії*"
                isValid={ckeckCompanyName && click ? true : false}
                isInvalid={!ckeckCompanyName && click ? true : false}
              />
              <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Name of company is required</Form.Control.Feedback>
              <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
            </Form.Group>
          } 
          <Form.Group>  
            <Form.Control
              value={email}
              onChange={({target}) => {
                if (target.value.length > 0 
                  && target.value.includes('@')
                  && target.value.includes('.')) {
                  setCkeckEmail(():boolean => true);
                  } else  {
                    setCkeckEmail(():boolean => false);
                  }
                  setEmail(target.value);
                }
              }
              isValid={ckeckEmail  === true && click }
              isInvalid={(ckeckEmail === false && click)}
              type="email"
              placeholder="Адреса електронної пошти*"
            />
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Email of company is required (@, domen - is required)</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
        <div className="order__container_name-email">
          <Form.Group>
            <Form.Control
              value={name}
              onChange={({target}) => {
                  if(target.value.length > 0) {
                    setCheckName(true);
                  } else {
                    setCheckName(false);
                  }

                  setName(target.value)
              }}
              isValid={checkName === true && click}
              isInvalid={(checkName === false && click)} 
              placeholder="ім'я*"/>
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Name is required</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={surname}
              onChange={({target}) => {
                    if (target.value.length > 0) {
                      setCheckSurname(true)
                    } else {
                      setCheckSurname(false);
                    }

                    setSurname(target.value);
              }}
              isValid={checkSurname === true && click}
              isInvalid={checkSurname === false && click}  
              placeholder="Прізвище*"/>
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Surname is required</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
        </div>
        <Form.Group>
          <Form.Control
            value={fullAddress}
            onChange={({target}) => {
              if (target.value.length > 0) {
                setCheckFullAdress(true);
              } else {
                setCheckFullAdress(false);
              }

              setFullAddress(target.value);
            }}
            isValid={checkFullAdress && click ? true : false}
            isInvalid={fullAddress.length === 0 && click === true ? true : false}  
            placeholder="Повна адреса*"
          />
          <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Full address is required</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
        </Form.Group>
        <div className="order__container_city-index">
          <Form.Group>
            <Form.Control 
              value={city}
              onChange={({target}) => {
                if(target.value.length > 0) {
                  setCheckCity(true);
                } else {
                  setCheckCity(false);
                }
                  setCity(target.value);
              }}
              isValid={checkCity && click ? true : false}
              isInvalid={checkCity === false && click ? true : false}  
              placeholder="Місто*"
            />
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">City is required</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
          <Form.Control
            value={index}
            onChange={({target}) =>  {
              if (target.value.length > 0) {
                setCheckIndex(true);
              } else {
                  setCheckIndex(false);
              }
              setIndex(target.value)
            }}
            isValid={checkIndex && click? true : false}
            isInvalid={!checkIndex && click? true : false}  
            placeholder="Індекс*"
          />
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Index is required</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
        </div>
        <Form.Select
          value={country}
          onChange={({target}:any)=> {
            if (target.value !== 'none') {
               setCheckCountry(true);
            } else {
                setCheckCountry(false);
            }
            setCountry(target.value)
          }}
          isValid={checkCountry && click ? true : false}
          isInvalid={checkCountry === false && click ? true : false}  
          aria-label="Floating label select example">
          <option value="none">Виберіть країну</option>
          <option value="Ukr">Україна</option>
          <option value="Rus">Росія</option>
          <option value="Eng">Англія</option>
        </Form.Select>
          <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Choose country is required</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
        <Form.Group>
          <Form.Control 
            value={number}
            onChange={({target}) => {
              if (target.value.length >=  8 && target.value.includes('+')) {
                 setCheckNumber(true);
              } else {
                setCheckNumber(false);
              }
              setNumber(target.value)
            }}
            isValid={checkNumber && click? true : false}
            isInvalid={!checkNumber && click? true : false}  
            placeholder="Номер телефону"
          />
          <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Number is required(min lenght = 8 , should contain `+`)</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
        </Form.Group>
        <label 
          className="order__corporate">
          <Form.Check 
            checked={isLicensed}
            onChange={() => setIsLicensed(prev => !prev)}
          />
          Ліцензія для іншої особи
        </label>
        {isLicensed && 
        <div className="order__container_name-license">
          <Form.Group>
            <Form.Control
              value={nameLicensee}
              onChange={({target}) =>  {
                  if (target.value.length > 0) {
                    setCheckNameLicensee(true);
                  } else {
                    setCheckNameLicensee(false);
                  }
                  setNameLicensee(target.value)
              }}
              isValid={checkNameLicensee && click ? true : false}
              isInvalid={!checkNameLicensee && click? true : false}  
              placeholder="Ім'я ліцінзіанта*"/>
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">The name of the licensee is required</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Control
              value={emailLicensee}
              onChange={({target}) =>  {
                  if (target.value.length > 0
                  && target.value.includes('@')
                  && target.value.includes('.')) {
                    setCheckEmailLicensee(true);
                  } else {
                    setCheckEmailLicensee(false);
                  }
                  setEmailLicensee(target.value)
              }}
              isValid={checkEmailLicensee && click ? true : false}
              isInvalid={!checkEmailLicensee && click ? true : false}
              type="email" 
              placeholder="Email ліцінзіанта*"/>
            <Form.Control.Feedback style={{position:"relative",top:'0',maxWidth:"226px"}} type="invalid">Email of company is required (@, domen - is required)</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
          </Form.Group>
        </div>}
        <div/>
        <Form.Group>
        <Form.Select
          value={paymentMethod}
          onChange={({target}:any)=>{
            if (target.value !== "none") {
              setCheckPaymentMethod(true);
            } else {
                setCheckPaymentMethod(false);
            }
            setPaymentMethod(target.value)
          }}
          isValid={checkPaymentMethod  && click ? true : false}
          isInvalid={!checkPaymentMethod  && click? true : false}  
          aria-label="Floating label select example"
        >
          <option value="none">Виберіть спосіб оплати</option>
          <option value="pay_1">Кредитна/Дебетова карта</option>
          <option value="pay_2">PayPal</option>
          <option value="pay_3">Грошовий переказ</option>
          <option value="pay_4">Замовлення на закупівлю</option>
        </Form.Select>
          <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Payment method country is required</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            value={cardNumber}
            onChange={({target})=> {
                if (target.value.length === 16) {
                  setCheckCardNumber(true);
                } else {
                    setCheckCardNumber(false);
                }
                setCardNumber(target.value)
            }}
            isValid={checkCardNumber && click? true : false}
            isInvalid={!checkCardNumber && click ? true : false}  
            placeholder="Номер картки*"
          />
          <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid">Card number is required(Should contain 16 numbers)</Form.Control.Feedback>
          <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
        </Form.Group>
        <Form.Select aria-label="Floating label select example">
          {(
              arrOfMounth.map((item:number) => <option key={item} value={item}>{item}</option>)
          )}
        </Form.Select>
        <Form.Select aria-label="Floating label select example">
          {(
              arrOfYears.map((item:number) => <option key={item} value={item}>{item}</option>)
          )}
        </Form.Select>
        <Form.Control
          value={safeCode}
          onChange={({target}) => {
              if (target.value.length === 3) {
                setCheckSafeCode(true);
              } else {
                setCheckSafeCode(false);
              }
              setSafecode(target.value)
          }} 
          isValid={checkSafeCode && click? true : false}
          isInvalid={!checkSafeCode && click ? true : false}  
          placeholder="Код безпеки*"/>
        <label 
          className="order__corporate"
        >
          <Form.Group>
            <Form.Check
              checked={cuponCode}
              onChange={() => setCuponCode(prev => !prev)}
            />
            <Form.Control.Feedback style={{position:"relative",top:'0'}} type="invalid"> number is required(Should contain 16 numbers)</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">Looks Good</Form.Control.Feedback>
            </Form.Group>
            Я маю код купона
        </label>
        {cuponCode &&
        <div className="order__container_button-cupon">
          <Form.Control
            value={discountCode}
            onChange={({target}) => setDiscountCode(target.value)} 
          />
          <Button onClick={() => {
            console.log(email.split('').some(a => a === '@')===true);
          }}>Застосувати</Button>
        </div>
        } 
        {checkAll === false && 
        <Card border="danger" style={{ width: '460px' }}>
          <Card.Header>Будь ласка, перевірте надану інформацію і заповніть всі обов'язкові поля.</Card.Header>
        </Card>}
        <Button onClick={() => {
          if(checkName && checkSurname && checkFullAdress && checkCountry && checkNumber
            &&checkPaymentMethod && checkCardNumber && checkSafeCode && (isLicensed === true ?
              (checkNameLicensee && checkEmailLicensee) : true) 
              && (corporateOrder === true ? (ckeckCompanyName):true)) { 
            history.push('/access');
            setCheckAll(true);
          } else {
            setCheckAll(false);
            setClick(true);

          }
        }}>Розмістити замовлення</Button>
      </div>
      <div>
        <div style={{position:'fixed'}}>
          <h2>Ви Купуєте</h2>
          <Card  style={{ width: '350px',marginTop:'30px', position:'fixed'}}>
            <Card.Header>
              <div className="order__img"/>
              <p className="order__name">Antony Test</p>
            </Card.Header>
            <Card.Body>
            <Card.Text className="order__card-text">
              <p>Всього:</p>
              <p>25,600.023 UAH</p>
          </Card.Text>
          </Card.Body>
        </Card>
        </div>
      </div>
    </Form>
    </Route>
      <Route path="/access" exact>
        <PathAccess/>
      </Route>
    </>
  );
}