export default [
  {
    path: "/request",
    name: "Request Data",
    component: () => import("@/views/PDPA/request")
  },
  {
    path: "/request-approval",
    name: "Request Approval",
    component: () => import("@/views/PDPA/approval/RequestApproval.vue")
  },
  {
    path: "/PDPA/report",
    name: "PDPA Report",
    component: () => import("@/views/PDPA/report/PDPAReport.vue")
  }
];
