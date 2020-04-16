import React from "react";
import { ScrollView, View } from "react-native";

import { Text, Button, StickersImage } from "../";
import styles from "./NoEmission.style";
import { t } from "../../utils";

interface Props {
  addEmission: () => void;
}

export default function NoEmission({ addEmission }: Props) {
  return (
    <ScrollView style={styles.container}>
      <StickersImage sticker="earth" />
      <View style={styles.textView}>
        <Text.H1 style={styles.header}>{t("NO_EMISSION_TITLE")}</Text.H1>
        <Text.Primary style={styles.paragraph}>
          {t("NO_EMISSION_THANKS")}
        </Text.Primary>
        <Text.Primary style={styles.paragraph}>
          {t("NO_EMISSION_START_USING_APP")}
        </Text.Primary>
        <Button.Primary
          fullWidth
          style={styles.button}
          onPress={addEmission}
          textType={"Primary"}
        >
          <Text.Primary bold white>
            {t("NO_EMISSION_ADD_FIRST_EMISSION")}
          </Text.Primary>
        </Button.Primary>
      </View>
    </ScrollView>
  );
}
