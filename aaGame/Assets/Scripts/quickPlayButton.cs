using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class quickPlayButton : MonoBehaviour {

	void OnMouseDown()
	{
		SceneManager.LoadScene ("QuickPlayScene");
	}
}
