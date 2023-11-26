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


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
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
        element: <DashboardLayout></DashboardLayout>,
        children:[
            //user dashboard
            {
                path: "userProfile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "addPet",
                element: <AddPet></AddPet>
            },
            {
                path: "myAddPets",
                element: <MyAddPets></MyAddPets>
            },
            {
                path: 'updatePetItem/:id',
                element:<UpdatePet></UpdatePet>,
                loader:({params})=>fetch(`http://localhost:5000/api/v1/pets-details/${params.id}`)
            },
            {
                path: "adoptionRequest",
                element: <AdoptionRequest></AdoptionRequest>
            },
            {
                path: "createDonationCampaign",
                element: <CreateDonationCampaign></CreateDonationCampaign>
            },
            {
                path: "myDonationCampaign",
                element: <MyDonationCampaigns></MyDonationCampaigns>
            },
            {
                path: "myDonations",
                element: <MyDonation></MyDonation>
            },
        ]
    }
])

export default Routes;