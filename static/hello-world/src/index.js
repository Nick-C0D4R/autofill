import { uiModificationsApi } from "@forge/jira-bridge";

const { onInit, onChange } = uiModificationsApi;

onInit(
  ({ api, uiModifications }) => {
    uiModifications.forEach((uiModification) => {
      console.log(
        `Data for UI modification ID ${uiModification.id}`,
        uiModification.data
      );
    });
    api.getFieldById("description").setValue({
      content: [
        {
          content: [{ type: "text", text: "Automatic Description" }],
          type: "paragraph",
        },
      ],
      type: "doc",
      version: 1,
    });
    api.getFieldById("description").setDescription("Automatic Description");
  },
  () => {
    return ["description"];
  }
);

onChange(
  ({ api, change, uiModifications }) => {
    uiModifications.forEach((uiModification) => {
      console.log(
        `Data for UI modification ID ${uiModification.id}`,
        uiModification.data
      );
    });

    const id = change.current.getId();
    const value = change.current.getValue();
  },
  () => {
    return ["description"];
  }
);
