[33mcommit a674425a3f74aa41ab4da0c6134e6d7a1a5cca9e[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Aug 3 22:05:05 2020 +0530

    setup creditGpa array and render credit

[33mcommit 928c06168b42fcae04689e88591284f79cfd676d[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Aug 3 21:39:02 2020 +0530

    add subject in CgpaCalculation and design CreditGpaForm and CreditGpaElement

[33mcommit dbd7a6fb9ff09d6a0d38d95bdbdfd8d5d6ddbfcc[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Aug 3 19:22:19 2020 +0530

    generalize subject form component to resue it for both Gpa and Cgpa Calcultaion

[33mcommit 165ff31fb3f149cdfe9822963607f077b7211449[m[33m ([m[1;31morigin/master[m[33m)[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 22:01:31 2020 +0530

    fix the bug which made the app to crash on refreshing the view gpa page. REASON --> caz we're accessing data from local storage and local storage belongs to browser so it cannot be executed in browser (getInitialProps runs code both in server and browser).

[33mcommit 8af43fd984c9ddc46a1db74fa7c5134e9fde0fb5[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 21:35:14 2020 +0530

    render stored gpa's in view gpa page using the GpaCgpaCard

[33mcommit 2ea3c5bdf22eacc232f5bd47808067cf31603b7f[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 21:12:30 2020 +0530

    create responsive gpa cgpa card

[33mcommit 05bee047b274f968945295c346dfe7b3f5550c75[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 19:46:34 2020 +0530

    receive stored gpa's in view/gpa route from local storage in get initial props method and inject it into props

[33mcommit 2ada854e32619584e140889bd9efd4f563a351c8[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 19:01:40 2020 +0530

    add unique id before storing gpa into local storage

[33mcommit 98167945f1993e9f75351bdf8c4df31d13f0ca7f[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 18:54:38 2020 +0530

    add next js links to bootstrap navbar and setup routing

[33mcommit 70830ea72b57ad0edda07d96f43df145691edbd6[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 30 00:39:20 2020 +0530

    add navbar and install next-images configure it to handle images.

[33mcommit fe86b176ebe6a601dc8ffe646e45493b31fd4734[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 13:07:05 2020 +0530

    reset the credit grade array after storing the gpa to local storage

[33mcommit af38cf2ca101423fc1de3dcc0238594de08e99e1[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 12:57:16 2020 +0530

    clear the num subjects input by accessing the child components method from parent component using ref,forward ref and useImperativeHandle

[33mcommit d0d8bbc99fcdba66bb3e18c2c488e36131088226[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 11:04:28 2020 +0530

    add toast component and make it appear after storing a gpa

[33mcommit f8b2d820e1435b8775be9b079efd2cbd4adaced1[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 02:04:52 2020 +0530

    pass the name entered in the second modal to save gpa function to add it to localstorage along with gpa and credit when saved

[33mcommit 5ebe2653929b2d7d37e0a9cf12b5091d7aa8c6f8[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 01:52:52 2020 +0530

    add a second modal with input field to enter a name to store with the gpa

[33mcommit 1b909c4afda4e6faca92184a698d3aa54d9db4a5[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 01:23:53 2020 +0530

    store gpa in the local storage after clicking save

[33mcommit 1d2b9c4885e557330057039d45781958c4fe70b9[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Wed Jul 29 00:57:57 2020 +0530

    setup view gpa and view cgpa route

[33mcommit b804e87a0019c8f295bca872aac6624957a450dd[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 22:57:30 2020 +0530

    add comments in index.js page about credit grade config

[33mcommit 502c2dca2583452e8130a20a3c8aad44a9ba9f8e[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 21:33:40 2020 +0530

    populate modal with current credit and grade

[33mcommit d1b12b26b6984fb198ec1d08c71aedc8bb377acd[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 21:13:37 2020 +0530

    add modal and setup close and open listeners

[33mcommit 295bcb15265a0668ad5518e1f9f0febc796309e0[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 19:40:20 2020 +0530

    add calculate gpa button and functionality

[33mcommit 34185be015e9fcdc498bbbae2da45f02beb3e307[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 12:59:55 2020 +0530

    setup credit change and grade change handler

[33mcommit 237a0c1bd55417c6cfee674bd9d436eee3a57a17[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 12:42:43 2020 +0530

    add uuid package for generating unique id

[33mcommit 4276346b7cf4802a7850f80fb48173d47cb62766[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 12:19:58 2020 +0530

    render credit Grade Element using credit Grade Array

[33mcommit 820546fe6bd897f644499986966bd11588bb681f[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Tue Jul 28 12:10:44 2020 +0530

    add credit grade array and populate it with default object according to number of subjects selected in the dropdown

[33mcommit 03232ee451599e10e58f6015b832ca5920efe5d5[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Jul 27 23:29:24 2020 +0530

    make grades flexible in credit grade element

[33mcommit 08e9e97c3d3b74250b89d3053fba7e7420da8c14[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Jul 27 22:18:23 2020 +0530

    setup CreditGradeForm and CreditGradeElement Component

[33mcommit 354b19eaf04809cd05fb446e293d5e8bf8668da9[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Jul 27 21:16:15 2020 +0530

    setup project structure and add subject form component

[33mcommit 4bfdfb40b99e4444a29f5ebfb77174a580fdd2e9[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Mon Jul 27 11:33:09 2020 +0530

    setup react-bootstrap

[33mcommit 98d38ad81793044030f64a78b136535f81459b5f[m
Author: ImElan <elansakthivel2000@gmail.com>
Date:   Thu Jul 23 23:58:29 2020 +0530

    initalize git repo and add node modules and .next folder to gitignore
