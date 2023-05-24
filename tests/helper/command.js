export const setStartEndDate = async (
  formStartDate,
  formEndDate,
  popUpCalendar
) => {
  await formStartDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[3].$$("td")[5].$("div").click(); //baris x kolom, contoh: 1,4: 6 Januari 2022
  await browser.pause(3000);

  await formEndDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[4].$$("td")[4].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};

export const setStartDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[4].$$("td")[1].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};

export const setEndDate = async (formDate, popUpCalendar) => {
  await formDate.click();
  await popUpCalendar.waitForExist();
  await popUpCalendar.$$("tr")[5].$$("td")[4].$("div").click(); //contoh: 4,6: 29 Januari 2022
  await browser.pause(3000);
};
