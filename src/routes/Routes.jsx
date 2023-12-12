import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home/Home";
import PetList from "../pages/PetList/PetList";
import CategoryCard from "../pages/Home/Category/CategoryCard";
import DetailsPet from "../components/DetailsPet/DetailsPet";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import AddPet from "../pages/Dashboard/UserProfile/AddPet";
import MyAddPets from "../pages/Dashboard/UserProfile/MyAddPets";
import AdoptionRequest from "../pages/Dashboard/UserProfile/AdoptionRequest";
import CreateDonationCampaign from "../pages/Dashboard/UserProfile/CreateDonationCampaign";
import MyDonationCampaigns from "../pages/Dashboard/UserProfile/MyDonationCampaigns";
import MyDonation from "../pages/Dashboard/UserProfile/MyDonation";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import UpdatePet from "../pages/Dashboard/UserProfile/UpdatePet";
import PrivateRoute from "./PrivateRoute";
import DonationCampaigns from "../pages/DonationCampaigns/DonationCampaigns";
import DonationDetails from "../pages/DonationCampaigns/DonationDetails";
import UpdateMyDonationCampaign from "../pages/Dashboard/UserProfile/UpdateMyDonationCampaign";
import AdminProfile from "../pages/Dashboard/AdminProfile/AdminProfile";
import AllUsers from "../pages/Dashboard/AdminProfile/AllUsers";
import AllPets from "../pages/Dashboard/AdminProfile/AllPets";
import AllDonations from "../pages/Dashboard/AdminProfile/AllDonations";
import AdminRoute from "./AdminRoute";
import Error from "../pages/Error/Error";
import Services from "../pages/Services/Services";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'petList',
                element: <PetList></PetList>
            },
            {
                path: 'services',
                element: <Services></Services>
            },
            {
                path: 'donationCampaigns',
                element: <DonationCampaigns></DonationCampaigns>
            },
            {
                path: 'donation-details/:id',
                element: <DonationDetails></DonationDetails>

            },
            {
                path: 'category-card/:category',
                element: <CategoryCard></CategoryCard>
            },
            {
                path: 'details-pet/:id',
                element: <DetailsPet></DetailsPet>,
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            //admin dashboard
            {
                path:"adminProfile",
                element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
            },
            {
                path:"allUsers",
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path:"user-allPets",
                element:<AdminRoute><AllPets></AllPets></AdminRoute>
            },
            {
                path:"user-allDonations",
                element: <AdminRoute><AllDonations></AllDonations></AdminRoute>
            },

            //user dashboard
            {
                path: "userProfile",
                element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
            },
            {
                path: "addPet",
                element: <PrivateRoute><AddPet></AddPet></PrivateRoute>
            },
            {
                path: "myAddPets",
                element: <PrivateRoute><MyAddPets></MyAddPets></PrivateRoute>
            },
            {
                path: 'updatePetItem/:id',
                element:<PrivateRoute><UpdatePet></UpdatePet></PrivateRoute>,
                loader:({params})=>fetch(`https://pet-adoption-server-side.vercel.app/api/v1/pets-details/${params.id}`)
            },
            {
                path: "adoptionRequest",
                element: <PrivateRoute><AdoptionRequest></AdoptionRequest></PrivateRoute>
            },
            {
                path: "createDonationCampaign",
                element: <PrivateRoute><CreateDonationCampaign></CreateDonationCampaign></PrivateRoute>
            },
            {
                path: "updateMyDonationCampaign/:id",
                element: <PrivateRoute><UpdateMyDonationCampaign></UpdateMyDonationCampaign></PrivateRoute>,
                loader:({params})=> fetch(`https://pet-adoption-server-side.vercel.app/api/v1/user/donation-campaign-details/${params.id}`)
            },
            {
                path: "myDonationCampaign",
                element: <PrivateRoute><MyDonationCampaigns></MyDonationCampaigns></PrivateRoute>
            },
            {
                path: "myDonations",
                element: <PrivateRoute><MyDonation></MyDonation></PrivateRoute>
            },
        ]
    }
])

export default Routes;