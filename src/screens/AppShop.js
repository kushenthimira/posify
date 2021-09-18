import React, { useState, useEffect } from "react";
import { View, StatusBar, FlatList, StyleSheet } from "react-native";
import { Icon, Card, useTheme, Button, Text } from "@ui-kitten/components";
import Screen from "../components/Screen";
import { firebase } from "../configs/Database";

import AppColors from "../configs/AppColors";

function AppShop(props) {
  const NewIcon = (props) => <Icon {...props} name="plus-outline" />;

  const theme = useTheme();

  const [shops, setShops] = useState([]);

  const shopRef = firebase.firestore().collection("shops");

  useEffect(() => {
    shopRef.onSnapshot(
      (querySnapshot) => {
        const newShops = [];
        querySnapshot.forEach((doc) => {
          const shop = doc.data();
          shop.id = doc.id;
          newShops.push(shop);
        });
        setShops(newShops);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <Screen>
      <StatusBar backgroundColor={AppColors.primary} barStyle="light-content" />
      <FlatList
        data={shops}
        keyExtractor={(shop) => shop.id}
        renderItem={({ item }) => (
          <Card
            status="primary"
            style={{
              marginVertical: "2%",
              marginHorizontal: "15%",
            }}
            onPress={(values) =>
              props.navigation.navigate("EditShopScreen", {
                shop: {
                  id: item.id,
                  name: item.name,
                  category: item.category,
                },
              })
            }
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Icon
                style={{ width: 30, height: 30, margin: "2%" }}
                fill={theme["color-primary-default"]}
                name="shopping-cart-outline"
              />
              <Text category="h6" style={{ fontWeight: "bold", margin: "2%" }}>
                {item.name}
              </Text>
              <Text category="label">
                Price Category :{" "}
                <Text category="label" style={{ textTransform: "uppercase" }}>
                  {item.category}
                </Text>
              </Text>
            </View>
          </Card>
        )}
      />
      <Button
        size="large"
        style={styles.fab}
        status="primary"
        accessoryLeft={NewIcon}
        onPress={() => props.navigation.navigate("AddShopScreen")}
      />
    </Screen>
  );
}

export default AppShop;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 25,
  },
});
