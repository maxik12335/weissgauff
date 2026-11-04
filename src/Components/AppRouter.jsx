import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from "../context";
import Loader from "./loader/Loader";

// Импорты страниц
import Main from "../pages/Main/Main";
import Brand from "../pages/Brand/Brand";
import Catalog from "../pages/Catalog/Catalog";
import Delivery from "../pages/Delivery/Delivery";
import Payment from "../pages/Payment/Payment";
import Info from "../pages/Info/Info";
import WarrantyTerms from "../pages/WarrantyTerms/WarrantyTerms";
import ServiceRequest from "../pages/ServiceRequest/ServiceRequest";
import PartsRequest from "../pages/PartsRequest/PartsRequest";
import TechConsult from "../pages/TechConsult/TechConsult";
import WholesaleForm from "../pages/WholesaleForm/WholesaleForm";
import Installation from "../pages/Installation/Installation";
import ReturnRequest from "../pages/ReturnRequest/ReturnRequest";
import Faq from "../pages/Faq/Faq";
import ExtendedWarranty from "../pages/ExtendedWarranty/ExtendedWarranty";
import Contacts from "../pages/Contacts/Contacts";
import Showrooms from "../pages/Showrooms/Showrooms";
import PickupPoints from "../pages/PickupPoints/PickupPoints";
import Franchise from "../pages/Franchise/Franchise";
import Login from "../pages/Login/Login";
import CatalogPage from "../pages/CatalogPage/CatalogPage";

const AppRouter = () => {
  const { isAuth, isLoading: authLoading } = useContext(AuthContext);
  const location = useLocation();
  
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true); 
    const timer = setTimeout(() => {
      setIsPageLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [location.pathname]); 

  const isLoading = authLoading || isPageLoading;

  if (isLoading) {
    return <Loader />; 
  }

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/" element={<Main />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/*" element={<CatalogPage />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/info" element={<Info />} />
        <Route path="/warranty-terms" element={<WarrantyTerms />} />
        <Route path="/service-request" element={<ServiceRequest />} />
        <Route path="/parts-request" element={<PartsRequest />} />
        <Route path="/tech-consult" element={<TechConsult />} />
        <Route path="/wholesale-form" element={<WholesaleForm />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/return-request" element={<ReturnRequest />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/extended-warranty" element={<ExtendedWarranty />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/showrooms" element={<Showrooms />} />
        <Route path="/pickup-points" element={<PickupPoints />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/login" element={<Login />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;