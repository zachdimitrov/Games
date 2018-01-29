using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class startupCircles : MonoBehaviour {
	public float rotate = 90f;

	// Update is called once per frame
	void Update () {
		transform.Rotate(Vector3.forward, rotate * Time.deltaTime);
	}
}
