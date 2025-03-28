Starting the run with 9 tests
1743144755920 - Starting test Test 1
1743144755947 - Starting test Test 2
1743144755957 - Starting test Test 3
1743144761640 - Finished test Test 2: passed in 4038
1743144761658 - Starting test Test 4
1743144762106 - Finished test Test 1: passed in 4531
1743144762125 - Starting test Test 5
1743144764211 - Finished test Test 4: passed in 2546
1743144764232 - Starting test Test 6
1743144765093 - Finished test Test 5: passed in 2962
1743144765113 - Starting test Test 7
1743144767298 - Finished test Test 6: passed in 3059
1743144767316 - Starting test Test 8
1743144768046 - Finished test Test 7: passed in 2924
1743144768063 - Starting test Test 9
1743144769608 - Finished test Test 3: passed in 9000
1743144770549 - Finished test Test 8: passed in 3227
1743144771490 - Finished test Test 9: passed in 3421
[MR] generating report data ...
[MR] generating test report ...
[MR] My Test Report
┌─────────────┬──────────────────────┐
│ Tests       │ 9                    │
│ ├ Passed    │ 9 (100.0%)           │
│ ├ Flaky     │ 0 (0.0%)             │
│ ├ Skipped   │ 0 (0.0%)             │
│ └ Failed    │ 0 (0.0%)             │
│ Steps       │ 114                  │
│ Suites      │ 9                    │
│ ├ Projects  │ 1                    │
│ ├ Files     │ 9                    │
│ ├ Describes │ 9                    │
│ └ Shards    │ 0                    │
│ Retries     │ 0                    │
│ Errors      │ 0                    │
│ Logs        │ 9                    │
│ Attachments │ 0                    │
│ Artifacts   │ 0                    │
│ Playwright  │ v1.51.1              │
│ Date        │ 28/03/2025, 07:52:33 │
│ Duration    │ 18.8s                │
└─────────────┴──────────────────────┘
[MR] html report: test-results/report.html (json: test-results/report.json)
[MR] view report: npx monocart show-report test-results/report.html
1743144772610 - Finished the run: passed

--------------------------

prometheus query
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="9000",expectedStatus="passed",id="3307cf1bbd7f94ba1dbc-b5aa4ee39202351bf734",location="tests\github1\test3.spec.ts:20:5",parallelIndex="2",retryCount="0",stepsCount="3",suite="Test 3",title="Test 3",workerIndex="7"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="4531",expectedStatus="passed",id="275a4cccf62bd2427e43-2eac93859b1f407354eb",location="tests\github1\test1.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="3",suite="Test 1",title="Test 1",workerIndex="5"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="4038",expectedStatus="passed",id="691dc2bc351603c34876-2b52bd01865d7a1399cc",location="tests\github1\test2.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 2",title="Test 2",workerIndex="6"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="3421",expectedStatus="passed",id="a546bdfe1c221b395880-ce6e7349aa14d9f1f6cb",location="tests\github1\test9.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="3",suite="Test 9",title="Test 9",workerIndex="5"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="3227",expectedStatus="passed",id="9061f5ff5e14fc7ac63b-318ef8ae017db37e4b90",location="tests\github1\test8.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 8",title="Test 8",workerIndex="6"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="3059",expectedStatus="passed",id="2096ddcdf475bbf50a03-383d48aed69eeb79077f",location="tests\github1\test6.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 6",title="Test 6",workerIndex="6"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="2962",expectedStatus="passed",id="b42166730a2260490da3-08387d81124975625d88",location="tests\github1\test5.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="3",suite="Test 5",title="Test 5",workerIndex="5"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="2924",expectedStatus="passed",id="e50a1f7c2c44ab3b0f10-daa4b85ea20da036dc76",location="tests\github1\test7.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="3",suite="Test 7",title="Test 7",workerIndex="5"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="2546",expectedStatus="passed",id="c02884e0e7ebd0ee6741-932c79a863fa1ce6e1cb",location="tests\github1\test4.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 4",title="Test 4",workerIndex="6"}

--------------------------

Starting the run with 9 tests
1743145884272 - Starting test Test 1
1743145884273 - Starting test Test 2
1743145884286 - Starting test Test 3
1743145892573 - Finished test Test 2: timedOut in 6557
1743145893196 - Finished test Test 3: passed in 7238
1743145893217 - Starting test Test 5
1743145893721 - Starting test Test 4
1743145897965 - Finished test Test 1: passed in 9319
1743145897986 - Starting test Test 6
1743145908940 - Finished test Test 5: passed in 15715
1743145908971 - Starting test Test 7
1743145912665 - Finished test Test 6: passed in 14666
1743145912705 - Starting test Test 8
1743145913493 - Finished test Test 7: failed in 4422
1743145914267 - Finished test Test 4: passed in 18929
1743145914642 - Starting test Test 9
1743145927341 - Finished test Test 8: passed in 14628
1743145936691 - Finished test Test 9: passed in 18576
[MR] generating report data ...
[MR] generating test report ...
[MR] My Test Report
┌─────────────┬──────────────────────┐
│ Tests       │ 9                    │
│ ├ Passed    │ 7 (77.8%)            │
│ ├ Flaky     │ 0 (0.0%)             │
│ ├ Skipped   │ 0 (0.0%)             │
│ └ Failed    │ 2 (22.2%)            │
│ Steps       │ 128                  │
│ Suites      │ 9                    │
│ ├ Projects  │ 1                    │
│ ├ Files     │ 9                    │
│ ├ Describes │ 9                    │
│ └ Shards    │ 0                    │
│ Retries     │ 0                    │
│ Errors      │ 2                    │
│ Logs        │ 9                    │
│ Attachments │ 2                    │
│ Artifacts   │ 0                    │
│ Playwright  │ v1.51.1              │
│ Date        │ 28/03/2025, 08:11:22 │
│ Duration    │ 55.8s                │
└─────────────┴──────────────────────┘
[MR] html report: test-results/report.html (json: test-results/report.json)
[MR] view report: npx monocart show-report test-results/report.html
1743145937835 - Finished the run: failed

--------------------------

If a test fails at first test no other passed results are reported to prometheus
✔pwd_test{actualStatus="timedOut",attachmentsCount="1",duration="6557",expectedStatus="passed",id="5a2bcbdf1415c212ab86-28dbfeef0d883b9870b1",location="tests\github2\test2.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 2",title="Test 2",workerIndex="9"}
✔pwd_test{actualStatus="failed",attachmentsCount="1",duration="4422",expectedStatus="passed",id="0bf92d3d786f4c829e8f-4fd9e69a105920178bd8",location="tests\github2\test7.spec.ts:20:5",parallelIndex="2",retryCount="0",stepsCount="4",suite="Test 7",title="Test 7",workerIndex="10"}

--------------------------
Starting the run with 9 tests
1743146161986 - Starting test Test 1
1743146161994 - Starting test Test 2
1743146162009 - Starting test Test 3
1743146167688 - Finished test Test 2: passed in 4094
1743146167705 - Starting test Test 4
1743146179311 - Finished test Test 1: passed in 13253
1743146179334 - Starting test Test 5
1743146180656 - Finished test Test 4: passed in 12942
1743146180686 - Starting test Test 6
1743146180877 - Finished test Test 3: passed in 14681
1743146180897 - Starting test Test 7
1743146196909 - Finished test Test 6: passed in 16225
1743146196929 - Starting test Test 8
1743146209531 - Finished test Test 5: timedOut in 30116
1743146210458 - Starting test Test 9
1743146212404 - Finished test Test 8: passed in 15466
1743146213835 - Finished test Test 7: timedOut in 32850
1743146234843 - Finished test Test 9: passed in 21210
[MR] generating report data ...
[MR] generating test report ...
[MR] My Test Report
┌─────────────┬──────────────────────┐
│ Tests       │ 9                    │
│ ├ Passed    │ 7 (77.8%)            │
│ ├ Flaky     │ 0 (0.0%)             │
│ ├ Skipped   │ 0 (0.0%)             │
│ └ Failed    │ 2 (22.2%)            │
│ Steps       │ 126                  │
│ Suites      │ 9                    │
│ ├ Projects  │ 1                    │
│ ├ Files     │ 9                    │
│ ├ Describes │ 9                    │
│ └ Shards    │ 0                    │
│ Retries     │ 0                    │
│ Errors      │ 3                    │
│ Logs        │ 9                    │
│ Attachments │ 2                    │
│ Artifacts   │ 0                    │
│ Playwright  │ v1.51.1              │
│ Date        │ 28/03/2025, 08:15:59 │
│ Duration    │ 1m 16s               │
└─────────────┴──────────────────────┘
[MR] html report: test-results/report.html (json: test-results/report.json)
[MR] view report: npx monocart show-report test-results/report.html
1743146235959 - Finished the run: failed


--------------------------

✔pwd_test{actualStatus="timedOut",attachmentsCount="1",duration="32850",expectedStatus="passed",id="c83199007c7201a5329e-6c686a62318c9743b09f",location="tests\github3\test7.spec.ts:20:5",parallelIndex="2",retryCount="0",stepsCount="3",suite="Test 7",title="Test 7",workerIndex="15"}
✔pwd_test{actualStatus="timedOut",attachmentsCount="1",duration="30116",expectedStatus="passed",id="4521776d2618175ab67a-70d8156df650bc3543c0",location="tests\github3\test5.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="5",suite="Test 5",title="Test 5",workerIndex="13"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="4094",expectedStatus="passed",id="1b202539390e52a7e170-f803b8e5ace7157c8ec8",location="tests\github3\test2.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="3",suite="Test 2",title="Test 2",workerIndex="14"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="16225",expectedStatus="passed",id="f3dc30e64f4e74d4c303-78427576a2ed54427870",location="tests\github3\test6.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="4",suite="Test 6",title="Test 6",workerIndex="14"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="14681",expectedStatus="passed",id="7ab7e294325e09c1c958-fc833352324e170e3f9e",location="tests\github3\test3.spec.ts:20:5",parallelIndex="2",retryCount="0",stepsCount="3",suite="Test 3",title="Test 3",workerIndex="15"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="13253",expectedStatus="passed",id="86cb215ae0b0709b0ff0-d20cad6bc1166312e7cd",location="tests\github3\test1.spec.ts:20:5",parallelIndex="0",retryCount="0",stepsCount="3",suite="Test 1",title="Test 1",workerIndex="13"}
✔pwd_test{actualStatus="passed",attachmentsCount="0",duration="12942",expectedStatus="passed",id="4423f7f7ba5613fb0f40-658af81d0b32eb697ed7",location="tests\github3\test4.spec.ts:20:5",parallelIndex="1",retryCount="0",stepsCount="4",suite="Test 4",title="Test 4",workerIndex="14"}


