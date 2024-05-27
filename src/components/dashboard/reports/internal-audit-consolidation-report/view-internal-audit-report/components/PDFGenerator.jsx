import logo from "../../../../../../assets/logo.png";
import moment from "moment";
import React from "react";
import font from "../../../../../../font/Poppins-Medium.ttf";
import Html from "react-pdf-html";
import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
Font.register({
  family: "Poppins",
  src: font,
});
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  globalFont: {
    fontFamily: "Poppins",
  },
  page2: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    fontFamily: "Poppins",
    paddingTop: 25,
    paddingHorizontal: 35,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    backgroundColor: "#0a7386",
    padding: 10,
    textAlign: "center",
  },
  reportName: {
    textAlign: "center",
  },

  h4: {
    fontSize: 12,
  },
  contents: {
    marginBottom: 15,
    color: "#0a7386",
    fontSize: 14,
  },
  overviewWrap: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  reportInfoViewItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  },
  reportNameView: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  reportInfoTitle: {
    fontSize: 12,
    color: "#0a7386",
  },
  reportInfoSubTitle: {
    fontSize: 12,
  },
  locationWrap: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  paragraph: {
    fontSize: 12,
  },
  summary: {
    flexDirection: "column",
    marginTop: 8,
  },
  annexureSummary: {
    flexDirection: "column",
    marginTop: 8,
    marginBottom: 10,
  },
  reportingView: {
    marginTop: 8,
    marginBottom: 12,
  },
  extraFieldsHeader: {
    fontSize: 18,
    marginBottom: 7,
    color: "#0a7386",
    marginTop: 12,
  },
  findingView: {
    marginTop: 8,
    marginBottom: 12,
  },
  summaryHeader: {
    fontSize: 14,
    marginBottom: 7,
    color: "#0a7386",
  },
  summaryPara: {
    fontSize: 13,
  },
  horizontalLine: {
    height: 2,
    width: "100%",
    backgroundColor: "#0a7386",
  },
  findHeader: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  summaryInfoWrapSummary: {
    marginTop: 0,
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  indexNumber: {
    fontSize: 14,
    color: "#0a7386",
    textDecoration: "underline",
  },
  findingsHeaderInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  singleFindingsHeaderInfo: {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
  },
  pdfHeaderWrap: {
    color: "#0a7386",
    fontSize: 15,
    marginBottom: 10,
  },
  singleFindingsHeaderInfoHeader: {
    fontSize: 12,
    color: "#0a7386",
  },
  singleFindingsHeaderInfoPara: {
    fontSize: 10,
  },
  singleFindSummaryWrap: {
    flexDirection: "column",
    gap: 5,
    marginTop: 10,
  },
  singleFindSummaryHeader: {
    fontSize: 12,
    color: "#0a7386",
  },
  singleFindSummaryPara: {
    fontSize: 10,
  },
  singleFindSummaryParaConsolidate: {
    fontSize: 10,
    marginTop: 10,
  },
  findings: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 20,
  },
  findingsSummary: {
    marginTop: 15,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginBottom: 20,
  },
  firstPage: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Poppins",
    justifyContent: "center",
  },
  overviewFields: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "50px",
  },
  pageStarter: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
  },
  h7: {
    fontSize: 8,
    fontFamily: "Poppins",
  },
  pageStarterLogo: {
    width: 40,
  },
  pageNumber: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  allFindingMianHeadingWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
});

const PDFGenerator = ({ reportObject }) => {
  return (
    <Document>
      <Page style={styles.firstPage} size="A4">
        <View style={styles.header}>
          <Image src={logo} style={styles.logo} />
        </View>
        <View style={styles.pdfHeaderWrap}>
          <Text style={styles.title}>Internal Audit Consolidation Report</Text>
        </View>
        <View>
          <Text style={styles.reportName}>{reportObject?.reportName}</Text>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
      <Page size="A4" wrap style={{ paddingBottom: "10%" }}>
        <View style={styles.pageStarter} fixed wrap>
          <Text style={styles.h7}>{reportObject?.reportName}</Text>
          <Image src={logo} style={styles.pageStarterLogo} />
        </View>

        {/* Page 1 */}
        <View style={styles.page2}>
          <Text style={styles.contents}>Contents </Text>
          <View style={styles.overviewWrap}>
            <Text style={styles.h4}>
              OVERVIEW -------------------------------------------------------
            </Text>
            <Text style={styles.h4}>
              EXECUTIVE SUMMARY ----------------------------------------------
            </Text>
            <Text style={styles.h4}>
              AUDIT PURPOSE ---------------------------------------------------
            </Text>
            <Text style={styles.h4}>
              SUMMARY OF KEY FINDINGS -----------------------------------------
            </Text>
            <View style={styles.overviewFields}>
              {reportObject?.consolidatedIARKeyFindingsList?.map((list) =>
                list?.reportingList
                  ?.filter((singleItem) => singleItem?.implicationRating === 1)
                  ?.map((singleItem) => {
                    return (
                      <Text style={styles.h4}>
                        {singleItem?.observationTitle.slice(0, 40)}...
                      </Text>
                    );
                  })
              )}
            </View>
            <Text style={styles.h4}>
              ALL FINDINGS -----------------------------------------------------
            </Text>
            <View style={styles.overviewFields}>
              {reportObject?.consolidatedIARKeyFindingsList?.map((list) =>
                list?.reportingList?.map((singleItem) => {
                  return (
                    <Text style={styles.h4}>
                      {singleItem?.observationTitle.slice(0, 40)}...
                    </Text>
                  );
                })
              )}
            </View>
            <Text style={styles.h4}>
              Audit Extra Fields
              -------------------------------------------------
            </Text>
            <View style={styles.overviewFields}>
              {reportObject?.intAuditExtraFieldsList?.map((singleItem) => {
                return (
                  <Text style={styles.h4}>
                    {singleItem?.heading.slice(0, 40)}...
                  </Text>
                );
              })}
            </View>
            <Text style={styles.h4}>
              ANNEXURE -------------------------------------------------------
            </Text>
          </View>
        </View>
        {/* Page 2 */}
        <View style={styles.page2} break>
          <Text style={styles.contents}>OVERVIEW </Text>
          <View style={styles.reportNameView}>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Report Name:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {reportObject?.reportName}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Report Date:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {moment.utc(reportObject?.reportDate).format("DD-MM-YYYY")}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Planned Start Date:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {moment
                  .utc(reportObject?.plannedStartDate)
                  .format("DD-MM-YYYY")}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Planned End Date:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {moment.utc(reportObject?.plannedEndDate).format("DD-MM-YYYY")}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Planned Hours:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {reportObject?.plannedHours}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Job Through:</Text>
              <Text style={styles.reportInfoSubTitle}>
                {reportObject?.riskApproach}
              </Text>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Location:</Text>
              <View style={styles.locationWrap}>
                {[
                  ...new Set(
                    reportObject?.subLocationList?.map(
                      (item) => item?.locationid?.description
                    )
                  ),
                ]?.map((locationItem) => {
                  return (
                    <Text style={styles.reportInfoSubTitle}>
                      {locationItem}
                    </Text>
                  );
                })}
              </View>
            </View>
            <View style={styles.reportInfoViewItem}>
              <Text style={styles.reportInfoTitle}>Sub Location:</Text>
              <View style={styles.locationWrap}>
                {reportObject?.subLocationList?.map((item) => {
                  return (
                    <Text style={styles.reportInfoSubTitle}>
                      {item?.description}
                    </Text>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
        {/* Page 3 */}
        <View style={styles.page2} break>
          <Text style={styles.contents}>EXECUTIVE SUMMARY </Text>
          <View>
            <Html>{reportObject?.executiveSummary}</Html>
          </View>
        </View>
        {/* Page 4 */}
        <View style={styles.page2} break>
          <Text style={styles.contents}>AUDIT PURPOSE </Text>
          <View>
            <Html>{reportObject?.auditPurpose}</Html>
          </View>
        </View>
        {/* Page 5 */}
        <View style={styles.page2} break>
          <Text style={styles.contents}>SUMMARY OF KEY FINDINGS </Text>
          {reportObject?.consolidatedIARKeyFindingsList?.map((list) =>
            list?.reportingList
              ?.filter((singleItem) => singleItem?.implicationRating === 1)
              ?.map((singleItem, index) => {
                return (
                  <View>
                    <Text style={styles.indexNumber}> Finding {index + 1}</Text>
                    <Html>{singleItem?.observationName}</Html>
                  </View>
                );
              })
          )}
        </View>
        {/* Page 6 */}
        <View style={styles.allFindingMianHeadingWrap} break>
          <Text style={styles.globalFont}>ALL FINDINGS</Text>
        </View>
        {/* Page 7 */}
        <View style={styles.page2} break>
          {reportObject?.consolidatedIARKeyFindingsList?.map(
            (list, mainIndex) =>
              list?.reportingList?.map((followUpItem, index) => {
                return (
                  <View
                    style={styles.findings}
                    key={index}
                    break={mainIndex === 0 && index === 0 ? false : true}
                  >
                    <Text style={styles.indexNumber}>Finding {index + 1}</Text>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindSummaryHeader}>
                        Observation
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        <Html>{followUpItem?.observationName}</Html>
                      </Text>
                    </View>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindSummaryHeader}>
                        Implication
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        {followUpItem?.implication}
                      </Text>
                    </View>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindSummaryHeader}>
                        Management Comments
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        {followUpItem?.managementComments}
                      </Text>
                    </View>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindSummaryHeader}>
                        Implication Rating
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        {followUpItem?.implicationRating === 1
                          ? "High"
                          : followUpItem?.implicationRating === 2
                          ? "Medium"
                          : followUpItem?.implicationRating === 3
                          ? "Low"
                          : ""}
                      </Text>
                    </View>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindSummaryHeader}>
                        Auditee
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        {followUpItem?.auditee?.name}
                      </Text>
                    </View>
                    <View style={styles.singleFindSummaryWrap}>
                      <Text style={styles.singleFindingsHeaderInfoHeader}>
                        Implementation Date
                      </Text>
                      <Text style={styles.singleFindSummaryPara}>
                        {moment(followUpItem?.implementationDate).format(
                          "YYYY-MM-DD"
                        )}
                      </Text>
                    </View>
                  </View>
                );
              })
          )}
        </View>

        {/* Page 8 */}
        <View style={styles.page2} break>
          {reportObject?.intAuditExtraFieldsList?.map((item, index) => {
            return (
              <View style={styles.findings} key={index}>
                <View style={styles.summaryInfoWrap}>
                  <View style={styles.singleFindSummaryWrap}>
                    <Text style={styles.singleFindSummaryHeader}>Heading</Text>
                    <Text style={styles.singleFindSummaryPara}>
                      {item?.heading.trim()}
                    </Text>
                  </View>
                  <View style={styles.singleFindSummaryWrap}>
                    <Text style={styles.singleFindSummaryHeader}>Data</Text>
                    <Text style={styles.singleFindSummaryPara}>
                      {item?.data.trim()}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        {/* Page 9 */}
        <View style={styles.page2} break>
          <Text style={styles.contents}>ANNEXURE </Text>
          <View>
            <Text style={styles.h4}>
              <Html>{reportObject?.annexure}</Html>
            </Text>
          </View>
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFGenerator;
