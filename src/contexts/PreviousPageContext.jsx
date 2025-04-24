import { createContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

// useLocation: React Router'dan gelir, şu anki URL bilgisini verir (pathname, state, vs).
// createContext: React’te bir context objesi oluşturmak için kullanılır.
// useEffect: Belli durumlarda (bu örnekte location değiştiğinde) bir işlem yapılmasını sağlar.
// useRef: Bir değer saklamak ama bileşen yeniden render olsa bile bu değeri kaybetmemek için kullanılır (kalıcı değişken gibi düşün).

// Diğer bileşenlerin erişebileceği, bir önceki sayfanın bilgisini saklayacak context objesi.
export const PreviousPageContext = createContext();

//Bu bileşen, uygulamanın etrafını sararak bir önceki route bilgisini çocuklara (children) aktarmayı sağlar.
//Yani mainjsxde App.jsxi saracağımız için bunu heryere aktarabileceğiz.
export function PreviousPageProvider({ children }) {
  //location: Şu anki route bilgisi.
  //prevLocationRef: Önceki route’u saklayacağımız kutucuk gibi bir şey.
  const location = useLocation();
  // const [previousLocation, setPreviousLocation] = useState(location);
  const previousLocationRef = useRef(null); // Önceki route bilgisini saklayacak kutucuk.
  const currentLocationRef = useRef(location); // Şu anki route bilgisini saklayacak kutucuk.

  //location her değiştiğinde, prevLocationRef.current’a location bilgisini atıyoruz.
  useEffect(() => {
    //setPreviousLocation(location);
    if (!location.pathname.includes("/signup")) {
      previousLocationRef.current = currentLocationRef.current;
      currentLocationRef.current = location;
    }
    console.log(location);
  }, [location]);

  //Bütün çocuk bileşenlere PreviousRouteContext aracılığıyla bir önceki sayfa bilgisini verir.

  //value={prevLocationRef.current} diyerek önceki sayfayı paylaşıyoruz.
  return (
    <PreviousPageContext.Provider value={previousLocationRef.current}>
      {children}
    </PreviousPageContext.Provider>
  );
}
