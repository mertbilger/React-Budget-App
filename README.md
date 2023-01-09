
# React ile Bütçe Takip ve Planlama Uygulaması

Bütçe takibi için tasarladığım uygulamada kullandığım önemli ve size yararlı olacak bilgilere değineceğim.


## uuidv4

Öncelikle değinmek istediğim kritik noktalardan biri uuidv4 olacak.

Örneğin biz bir market gideri ekledik ve gider kısmına eklendi ve id'side 1 olsun.Farklı bir günde de market eklemek istediğimizde `uuidv4` burda devreye giriyor eğer `uuidv4` kullanmassak market giderleri birleşir çünkü ikisinde id'si 1 olacaktır ve toplam market harcamamızı görürüz.Buda karışıklığa yol açar ve bütçe takibi konusunda pek verimli olduğu söylenemez.Kısacası `uudiv4` bize benzersiz id'ler oluşturuyor ve bu sayede karışıklığın önüne geçmiş oluyoruz.
```javascript
const masraf = {
            id: uuidv4(),
            name: name,
            tutar: parseInt(tutar),
        }

```

Görüldüğü gibi masraf eklerken giden id ismi `uudiv4` olarak tanımlıyoruz.


Tabiki uudiv4 kullanmak için import işlemi gerekli.

```javascript
import { v4 as uuidv4 } from 'uuid';
```

## Grafikler

### **PieChart**


Öncelikle grafikleri https://recharts.org/en-US/examples sitesinden alabilirsiniz ama benim yapmış olduğum değişiklikler bulunmaktadır.
Bunun temelinde değişiklerin tutulduğu datamız vardır.
- Data değişkeni için yaptığım değişikler aşşağıdaki gibidir.
```javascript
const Chartss = () => {
    const { butce, harcamalar } = useContext(AppContext);
    const totalExpenses = harcamalar.reduce((total, item) => {
        return (total += item.tutar)
    }, 0)
    const Ktutar = butce - totalExpenses;
    const data = [
        { name: "Bütçe", value: Ktutar },
    ];
```
Bu alanda girilen değerlerin toplamı ve kalan tutar için işlemler var.
`const data` alanında ise `value` kısmını yukarıda ki `Ktutar`kısmını veriyoruz.Çünkü ilk başta grafiğimiz
bizim bütçemizi göstermeli.

Daha sonra Data güncellenmesi var;

```javascript
 const newData = [...data, { name: '', value: totalExpenses }]
```

Yeni data değeri oluşturuyoruz ve value değerine totalExpenses değerini veriyoruz.Bunun nedeni girilen harcama tutarlarının toplamlarını göndermemiz olacaktır.

Daha `PieChart` divi içerisindeki data alanının oluşturduğumuz data ile değiştiriyoruz.

```javascript
 data={newData}
```
### **LineChart**

```javascript
 const { butce, harcamalar } = useContext(AppContext);
    const totalExpenses = harcamalar.reduce((total, item) => {
        return (total += item.tutar)
    }, 0)
    const alertType = totalExpenses > butce ? 'red' : 'green';
    const newData = [...data, { name: 'Şu Ana Kadar', Harcanan: totalExpenses }]
```
Yine benzer işlemleri yapıyoruz.

`const alertType = totalExpenses > butce ? 'red' : 'green';`

Alanında eğer toplam harcamalar bütçeyi geçerse grafik çizgisi kırmızı renge dönüşmesi.

Data değerimiz ve grafik çizgisini güncelliyoruz.

```javascript
 data={newData}
 stroke={alertType}
```
Burada ufak bir detay daha var path alanlarının değişimi.Değiştirmemizin nedeni üzülen suratın
toplam harcamalar bütçeyi geçince gelmesi gerekli olduğu için.

## Bütçe güncelleme

Bütçe değiştirme butonunu oluşturmak için `butcebutton.js` dosyasını kullanıyoruz.
```
import React from 'react';

              const ViewBudget = (props) => {
              return (
              <>
              <span>Bütçe: {props.butce} TL</span>
              <button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
                    Değiştir
              </button>
                </>
               );
             };

                export default ViewBudget;
```

Burda girdiğimiz bütçe değerini kullanıcıdan istiyoruz ve props sayesinde **`AppContext`** 'te kullanabiliyoruz. 
(Bütçe değerini güncelleme işlemi)
  
```
 import React, { useState } from 'react';
        
                              const EditBudget = (props) => {
                              const [value, setValue] = useState(props.butce);
                              return (
                              <>
                              <input
                              required='required'
                              type='number'
                              class='form-control mr-3'
                              id='name'
                              value={value}
                              onChange={(event) => setValue(event.target.value)}
                              />
                              <button
                              type='button'
                              class='btn btn-primary'
                              onClick={() => props.handleSaveClick(value)}
                              >
                              Save
                              </button>
                              </>
                            );
                            ;
        
                           export default EditBudget;
```
Daha sonra useState kullanarak değerlerimizi tanımlıyoruz.useState false değeri almasının 
sebebi bizdeğiştirdiğimizde uygulanacak olması.`SET_BUDGET` değerini **`AppContext`**'te tanımlayacağız.
Eğer değişiklik yapılmış ise EditBudget ve ViewBudget alanları güncellenecek.
```
const AppReducer = (state, action) => {
                        switch (action.type) {
                            case 'SET_BUDGET':
                            return {
                                ...state,
                                butce: action.payload,
                                }
                            }
                        }
```

Girilen harcama ekranında bulunan çarpı işaretine (TiDelete) tıklayınca `Deleteitem` 
fonksiyonumuz çalışacak.**`HARCAMA_SİL`** fonksiyonu ise girilen değerin id sini `AppContex`e 
göderilip orda silme işlemine tabi tutulacak.

```
case 'HARCAMA_SİL':
                        return {
                            ...state,
                            harcamalar: state.harcamalar.filter(
                                (harcamalar) => harcamalar.id !== action.payload
                            ),
                         }
                       }
                     } 
```
