import 'package:flutter/material.dart';
import 'dart:async';
import 'homepage.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'MyFlutter',
      theme: ThemeData(primarySwatch: Colors.green),
      home: const MyLandingPage()
    );
  }
}

class MyLandingPage extends StatefulWidget {
  const MyLandingPage({Key? key}) : super(key: key);

  @override
  // ignore: library_private_types_in_public_api
  _MyLandingPageState createState() => _MyLandingPageState();
}

class _MyLandingPageState extends State<MyLandingPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _animationController;
  late Timer _timer;

  @override
  void initState() {
    super.initState();

    _animationController = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 1),
    );

    _timer = Timer(const Duration(seconds: 5), () {
      Navigator.push(
        context,
        MaterialPageRoute(builder: (context) => const MyHomePage(title: 'Herbsy',)),
      );
    });

    _animationController.forward();
  }

  @override
  void dispose() {
    _animationController.dispose();
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: FadeTransition(
          opacity: _animationController,
          child: const FlutterLogo(size: 60),
        ),
      ),
    );
  }
}


