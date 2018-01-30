using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class levelsChange : MonoBehaviour {

	void OnMouseDown()
	{
		SceneManager.LoadScene ("LevelMenuScene");
	}
}
