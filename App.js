import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { ThemeContext } from "./src/configs/theme";
import AppColors from "./src/configs/AppColors";

import AppLogin from "./src/screens/AppLogin";
import AppHome from "./src/screens/AppHome";
import AppShop from "./src/screens/AppShop";
import AppStock from "./src/screens/AppStock";
import AppEmployee from "./src/screens/AppEmployee";
import AppProfile from "./src/screens/AppProfile";
import AppReport from "./src/screens/AppReport";
import AppReportExport from "./src/screens/AppReportExport";
import AppSelectShop from "./src/screens/AppSelectShop";
import AppAddInvoice from "./src/screens/AppAddInvoice";
import AppAddReturn from "./src/screens/AppAddReturn";
import AppAddShop from "./src/screens/AppAddShop";
import AppAddEmployee from "./src/screens/AppAddEmployee";
import AppAddStock from "./src/screens/AppAddStock";
import AppEditShop from "./src/screens/AppEditShop";
import AppEditStock from "./src/screens/AppEditStock";
import AppInvoice from "./src/screens/AppInvoice";
import AppDelInvoice from "./src/screens/AppDelInvoice";

const MainStack = createStackNavigator();

export default () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <NavigationContainer>
            <MainStack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: AppColors.primary },
                headerTintColor: AppColors.background,
                headerTitleStyle: {
                  fontWeight: "bold",
                },
              }}
            >
              <MainStack.Screen
                name="LoginScreen"
                component={AppLogin}
                options={{
                  title: "Login",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="AppHome"
                component={AppHome}
                options={{
                  title: "Home",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="AppInvoice"
                component={AppInvoice}
                options={({ route }) => ({
                  title:
                    route.params.invoice.docID +
                    " (" +
                    route.params.invoice.shopName +
                    ") | Posify",
                  headerShown: false,
                })}
              />
              <MainStack.Screen
                name="AppDelInvoice"
                component={AppDelInvoice}
                options={{
                  title: "Remove Invoices",
                }}
              />
              <MainStack.Screen
                name="ProfileScreen"
                component={AppProfile}
                options={{
                  title: "Profile",
                }}
              />
              <MainStack.Screen
                name="SelectShopScreen"
                component={AppSelectShop}
                options={{
                  title: "Select Shop",
                }}
              />
              <MainStack.Screen
                name="AddInvoiceScreen"
                component={AppAddInvoice}
                options={{
                  title: "New Invoice",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="AddReturnScreen"
                component={AppAddReturn}
                options={{
                  title: "Deduct Returns",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="StockScreen"
                component={AppStock}
                options={{
                  title: "Stock",
                }}
              />
              <MainStack.Screen
                name="AddStockScreen"
                component={AppAddStock}
                options={{
                  title: "New Items",
                }}
              />
              <MainStack.Screen
                name="EditStockScreen"
                component={AppEditStock}
                options={{
                  title: "Edit Items",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="ShopScreen"
                component={AppShop}
                options={{
                  title: "Shops",
                }}
              />
              <MainStack.Screen
                name="AddShopScreen"
                component={AppAddShop}
                options={{
                  title: "New Shop",
                }}
              />
              <MainStack.Screen
                name="EditShopScreen"
                component={AppEditShop}
                options={{
                  title: "Edit Shop Details",
                  headerShown: false,
                }}
              />
              <MainStack.Screen
                name="ReportScreen"
                component={AppReport}
                options={{
                  title: "Reports",
                }}
              />
              <MainStack.Screen
                name="ReportExport"
                component={AppReportExport}
                options={{
                  title: "Report",
                }}
              />
              <MainStack.Screen
                name="EmployeeScreen"
                component={AppEmployee}
                options={{
                  title: "Employees",
                }}
              />
              <MainStack.Screen
                name="AddEmployeeScreen"
                component={AppAddEmployee}
                options={{
                  title: "New Employees",
                }}
              />
            </MainStack.Navigator>
          </NavigationContainer>
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};
