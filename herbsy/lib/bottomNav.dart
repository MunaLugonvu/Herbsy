
import 'package:flutter/material.dart';
import 'settings.dart';
import 'homepage.dart';

class BottomNav extends StatefulWidget {
  const BottomNav({super.key});
  @override
  State<BottomNav> createState() => _BottomNavState();
}

class _BottomNavState extends State<BottomNav> {
  int index = 0;
  List pages = const [MyHomePage(title: 'My Home Page'), Settings() ];

  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: pages[index],
        bottomNavigationBar: Container(
            height: 70,
            decoration: const BoxDecoration(
              color: Colors.black,
            ),
            width: MediaQuery.of(context).size.width * .9,
            margin: const EdgeInsets.fromLTRB(20, 0, 20, 10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                InkWell(
                  onTap: () {
                    setState(() {
                      index = 0;
                    });
                  },
                  child: const Icon(
                    Icons.home,
                    size: 20,
                    color: Colors.green,
                  ),
                ),
                InkWell(
                  onTap: () {
                    setState(() {
                      index = 1;
                    });
                  },
                  child: const Icon(
                    Icons.settings,
                    size: 20,
                    color: Colors.green,
                  ),
                ),
              ],
            )));
  }
}
